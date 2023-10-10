# -*- coding: utf-8 -*-

import random, string, json, os, xlrd
from flask import Flask, request, current_app, session, redirect, url_for, make_response, send_file

from pyrfc import Connection, ConnectionPool
from pyshlp import valueInput
from systems import shlp, backend, SAPROUTER
from utils import to_json

app = Flask(__name__)
app.config.update(
    SECRET_KEY = ''.join(random.choice(string.letters+string.digits) for x in range(24))
)

ABAPSYSTEM = {"dest": "MMX"}

connection_pool=ConnectionPool()

def log_request():
    # for h in request.headers: print h
    #if app_config['logRequests']:
    #    app.logger.debug('%s %s' % (request.method, request.url))
    username=session['user'] if 'user' in session else ''
    print (username # , connection_pool)

#====================================================================
#
# App routes
#
#====================================================================

# Document Flow
@app.route('/docflow', methods=['POST'])
def docflow():
    try:
        connection = connection_pool.get()
        payload = json.loads(request.data)
        result = connection.call('PAM_DOCFLOW_GET', **payload)

        connection_pool.put(connection)
        return to_json(result)

    except Exception as ex:
        connection_pool.put(connection)
        return serverError(ex), 500

# Equipment
@app.route('/equipment/<path:path>', methods=['POST'])
def equipment(path):
    try:
        payload = json.loads(request.data)

        if path == 'get':
            result = connection_pool.worker('PAM_EQUIPMENT_GET', payload)
        elif path == 'getlist':
            result = connection_pool.worker('PAM_EQUIPMENT_GETL', payload)
        elif path == 'change':
            result = connection_pool.worker('PAM_EQUIPMENT_CHANGE', payload)
        elif path == 'install':
            result = connection_pool.worker('PAM_EQUIPMENT_INSTALL', payload)
        elif path == 'dismantle':
            result = connection_pool.worker('PAM_EQUIPMENT_DISMTLE', payload)
        else:
            raise Exception ('not implemented: %s' % path)

        return to_json(result)

    except Exception as ex:
        return serverError(e), 500

# Functional Location
@app.route('/floc/<path:path>', methods=['POST'])
def floc(path):
    try:
        connection = connection_pool.get()
        payload = json.loads(request.data)

        if path == 'gethier':
            result = connection.call('PAM_FUNC_LOC_GETLIST', **payload)
            connection_pool.put(connection)
            return to_json(result)

    except Exception as ex:
        connection_pool.put(connection)
        return serverError(ex), 500

# Notifications
@app.route('/service_notification/<path:path>', methods=['POST'])
def service_notification (path):
    try:
        payload = json.loads(request.data)
        path = path.lower()

        if path == 'getlist':
            result = connection_pool.worker('PAM_NOTIFICATION_GETL', payload)
        elif path == 'get':
            result = connection_pool.worker('PAM_NOTIFICATION_GET', payload)
        elif path == 'create':
            result = connection_pool.worker('PAM_NOTIF_CREATE', payload)
        elif path == 'create_order':
            result = connection_pool.worker('PAM_SERV_ORD_CREATE_N', payload)
        elif path == 'change':
            result = connection_pool.worker('PAM_NOTIF_CHANGE', payload)
        else:
            raise Exception ('not implemented: %s' % path)

        return to_json(result)

    except Exception as ex:
        connection_pool.put(connection)
        return serverError(ex), 500

# Work Order (server level coreography)
@app.route('/service_order/<path:path>', methods=['POST'])
def work_order(path):
    try:
        connection = connection_pool.get()
        payload = json.loads(request.data)

        if path == 'create':
            result = connection.call('PAM_SERVICE_ORD_CREATE', **payload)
        elif path == 'create_from_notification':
            result = connection.call('PAM_SERV_ORD_CREAT_N', **payload)
        elif path == 'get':
            result = connection.call('PAM_SERVICE_ORD_GET', **payload)
            ## todo: remove after this backend error fixed
            ## if len(result['ET_RETURN']) == 1:
            ##    error = result['ET_RETURN'][0]
            ##    if error['TYPE'] == 'E' and error['ID'] == 'IWO_BAPI' and error['NUMBER'] == '121':
            ##        result['ET_RETURN'] = []
        elif path == 'cost':
            result = connection.call('PAM_SERVICE_ORDER_COST_CALC', **payload)
        elif path == 'getlist':
            # params:
            # # of records
            # fromDate [toDate]
            # user
            # priority(ies) []
            # userStatus(es) []
            # docType(s) [] (open, in-process, completed, historical)
            # totals
            # sortOrder []
            IS_DISPLAY_PARAMETERS = {
                'FORCE_REFRESH': 'X',                                                   # Also determine data if selection conditions are unchanged
                'PAGELENGTH': payload['records'] if 'records' in payload else 10000,    # "Unlimited" # of records, if totals required
                'SHOW_PAGE_NUMBER': 0                                                   # Current page
            }
            IT_SORTORDER = payload['sortOrder'] if 'sortOrder' in payload else []
            if 'totals' in payload:
                IV_TOTALS = 'X' if payload['totals'] else ''
            else:
                IV_TOTALS = ''
            IT_RANGES = []

            # few defaults, remove from here if sent by app
            IT_RANGES.append({
                'FIELD_NAME': 'SHOW_DOCS_WITH_TO_DATE', 'SIGN': 'I', 'OPTION': 'LE',
                'LOW_VALUE': '21991231', 'HIGH_VALUE': '' })
            IT_RANGES.append({
                'FIELD_NAME': 'SHOW_OPEN_DOCUMENTS', 'SIGN': 'I', 'OPTION': 'EQ',
                'LOW_VALUE': 'X', 'HIGH_VALUE': '' })
            IT_RANGES.append({
                'FIELD_NAME': 'SHOW_DOCUMENTS_IN_PROCESS', 'SIGN': 'I', 'OPTION': 'EQ',
                'LOW_VALUE': 'X', 'HIGH_VALUE': '' })
            IT_RANGES.append({
                'FIELD_NAME': 'SHOW_COMPLETED_DOCUMENTS', 'SIGN': 'I', 'OPTION': 'EQ',
                'LOW_VALUE': 'X', 'HIGH_VALUE': '' })
            IT_RANGES.append({
                'FIELD_NAME': 'SHOW_HISTORICAL_DOCUMENTS', 'SIGN': 'I', 'OPTION': 'EQ',
                'LOW_VALUE': 'X', 'HIGH_VALUE': '' })

            # dates
            if 'fromDate' in payload and 'toDate' in payload:
                IT_RANGES.append({
                    'FIELD_NAME': 'OPTIONS_FOR_ENTER_DATE', 'SIGN': 'I', 'OPTION': 'BT',
                    'LOW_VALUE': payload['fromDate'], 'HIGH_VALUE': payload['toDate']})
            elif 'fromDate' in payload:
                IT_RANGES.append({
                    'FIELD_NAME': 'OPTIONS_FOR_ENTER_DATE', 'SIGN': 'I', 'OPTION': 'GE',
                    'LOW_VALUE': payload['fromDate'], 'HIGH_VALUE': '' })
            elif 'toDate' in payload:
                IT_RANGES.append({
                    'FIELD_NAME': 'OPTIONS_FOR_ENTER_DATE', 'SIGN': 'I', 'OPTION': 'LE',
                    'LOW_VALUE': payload['toDate'], 'HIGH_VALUE': '' })

            # user
            if 'username' in payload:
                if payload['username']:
                    IT_RANGES.append ({
                        'FIELD_NAME': 'OPTIONS_FOR_ENTERED_BY', 'SIGN': 'I', 'OPTION': 'EQ',
                        'LOW_VALUE': payload['username'], 'HIGH_VALUE': '' })

            # user status(es)
            if 'userStatus' in payload:
                if type(payload['userStatus']) is list:
                    for status in payload['userStatus']:
                        IT_RANGES.append({
                            'FIELD_NAME': 'OPTIONS_FOR_STATUS_INCLUSIVE', 'SIGN': 'I', 'OPTION': 'EQ',
                            'LOW_VALUE': status, 'HIGH_VALUE': '' })
                else:
                    if payload['userStatus']:
                        IT_RANGES.append({
                            'FIELD_NAME': 'OPTIONS_FOR_STATUS_INCLUSIVE', 'SIGN': 'I', 'OPTION': 'EQ',
                            'LOW_VALUE': payload['userStatus'], 'HIGH_VALUE': '' })

            # priority(ies)
            if 'priority' in payload:
                if type(payload['priority']) is list:
                    for p in payload['priority']:
                        IT_RANGES.append({
                            'FIELD_NAME': 'OPTIONS_FOR_PRIORITY', 'SIGN': 'I', 'OPTION': 'EQ',
                            'LOW_VALUE': p, 'HIGH_VALUE': '' })
                else:
                    if payload['priority']:
                        IT_RANGES.append({
                            'FIELD_NAME': 'OPTIONS_FOR_PRIORITY', 'SIGN': 'I', 'OPTION': 'EQ',
                            'LOW_VALUE': payload['priority'], 'HIGH_VALUE': '' })

            # docTypes
            if 'docType' in payload:
                abap_dt = { 'open':       'SHOW_OPEN_DOCUMENTS',
                            'process':    'SHOW_DOCUMENTS_IN_PROCESS',
                            'completed':  'SHOW_COMPLETED_DOCUMENTS',
                            'historical': 'SHOW_HISTORICAL_DOCUMENTS' }

                if type(payload['docType']) is list:
                    for doctype in payload['docType']:
                        if doctype in abap_dt:
                            IT_RANGES.append({
                                'FIELD_NAME': abap_dt[doctype], 'SIGN': 'I', 'OPTION': 'EQ',
                                'LOW_VALUE': 'X', 'HIGH_VALUE': '' })
                        else:
                            raise Exception('Work Order doc type invalid: %s', doctype)
                else:
                    doctype = payload['docType']
                    if doctype in abap_dt:
                        IT_RANGES.append({
                            'FIELD_NAME': abap_dt[doctype], 'SIGN': 'I', 'OPTION': 'EQ',
                            'LOW_VALUE': 'X', 'HIGH_VALUE': '' })
                    else:
                        raise Exception('Work Order doc type invalid: %s', doctype)

            abap_payload = { 'IS_DISPLAY_PARAMETERS': IS_DISPLAY_PARAMETERS,
                             'IT_SORTORDER': IT_SORTORDER,
                             'IV_TOTALS': IV_TOTALS,
                             'IT_RANGES': IT_RANGES}

            #print '::abap payload::'
            #for k in abap_payload:
            #    if k != 'IT_RANGES':
            #        print k,':', abap_payload[k]
            #    else:
            #        for r in abap_payload['IT_RANGES']:
            #            print r

            result = connection.call('PAM_SERVICE_ORD_GETL', **abap_payload)
        elif path == 'change':
            result = connection.call('PAM_SERVICE_ORD_CHANGE', **payload)
        else:
            raise Exception ('not implemented: %s' % path)

        connection_pool.put(connection)
        return to_json(result)

    except Exception, e:
        connection_pool.put(connection)
        return serverError(e), 500

@app.route('/service_confirmation/<path:path>', methods=['POST'])
def confirmation(path):
   try:
        payload = json.loads(request.data)
        path = path.lower()

        if path == 'getlist':
            ##for line in payload['IT_ORDER_RANGE']:
            ##    line['LOW'] = line['LOW'].lstrip('0')
            result = connection_pool.worker('/COE/RBP_PAM_CONFIRM_GETL',   payload)
            ## todo: remove after this backend error fixed
            #if len(result['ET_RETURN']) == 1:
            #    error = result['ET_RETURN'][0]
            #    if error['TYPE'] == 'E' and error['ID'] == 'IH' and error['NUMBER'] == '047':
            #        result['ET_RETURN'] = []

        elif path == 'get':
            result = connection_pool.worker('PAM_CONFIRM_GET',    payload)

        elif path == 'create':
            result = connection_pool.worker('PAM_CONFIRM_CREATE', payload)
        else:
            raise Exception ('not implemented: %s' % path)

        return to_json(result)

   except Exception as ex:
        # connection_pool.put(connection)
        return serverError(e), 500

#====================================================================
#
# Attachments/DMS
#
#====================================================================

@app.route('/dms', methods = ['GET', 'POST', 'DELETE'])
def dms():
    try:

        payload = json.loads(request.data) if len(request.data) > 0 else {}
        #print 'args:', request.args, 'method:', request.method, 'payload:', request.data, 'form:', request.form.keys(), 'files:', request.files.keys()

        method = request.method.upper()

        connection = connection_pool.get()

        # Download doc
        if method == 'GET':
            mime_type = request.args['MIMETYPE']
            format = request.args['format'] if 'format' in request.args else ''

            result = connection.call('/COE/RBP_PAM_DOCUMENT_CNT_GET', IS_INFOOBJECT_ID={'CLASS': request.args['CLASS'], 'OBJID': request.args['OBJID']})

            for err in result['ET_RETURN']:
                if err['TYPE'] == 'E':
                    raise Exception('Error reading document CLASS %s OBJID %s' % (request.args['CLASS'], request.args['OBJID']))

            if format == 'file':
                response = make_response(result['EV_CONTENT'])
                response.headers['Content-Disposition'] = 'attachment'
                response.headers['Content-Type'] = mime_type
                #print 'doc response file: %s %u bytes' % (mime_type, len(result['EV_CONTENT']))

                connection_pool.put(connection)
                return send_file(io.BytesIO(result['EV_CONTENT']))

            elif format == 'base64':
                raw = len(result['EV_CONTENT'])
                result['EV_CONTENT'] = result['EV_CONTENT'].encode('base64')
                #print 'doc response base64: %s %u bytes (%u)' % (mime_type, len(result['EV_CONTENT']), raw)

                connection_pool.put(connection)
                return to_json(result)

            else:
                response = make_response(result['EV_CONTENT'])
                response.headers['Content-Type'] = mime_type
                # print ('doc response raw: %s %u bytes' % (mime_type, len(result['EV_CONTENT'])))

                connection_pool.put(connection)
                return response

        # Upload doc
        elif method == 'POST':
                if len(request.files) == 0:
                    return serverError('No files sent'), 500
                connection = connection_pool.get()
                # set dms parameters
                IS_DOCUMENT_UPL = {}
                for attr in request.form.keys():
                    IS_DOCUMENT_UPL[attr] = request.form[attr]
                #print 'dms=', IS_DOCUMENT_UPL, 'files=', request.files

                total = 0
                for file_name in request.files:
                    ofile = request.files[file_name]
                    IS_DOCUMENT_UPL['FILE_NAME'] = file_name
                    IS_DOCUMENT_UPL['CONTENT'] = ofile.read()

                    l = len(IS_DOCUMENT_UPL['CONTENT'])
                    #print file_name, l, file
                    total += l

                    result = connection.call('/COE/RBP_PAM_DOCUMENT_CNT_UPL', IS_DOCUMENT_UPL=IS_DOCUMENT_UPL)

                connection_pool.put(connection)
                return to_json(result) # todo: the last one returned

        # Delete doc
        elif method == 'DELETE':
            IS_DOCUMENT_DEL = {};
            for attr in ['DOCUMENTTYPE', 'DOCUMENTNUMBER', 'DOCUMENTPART', 'DOCUMENTVERSION', 'FILE_NAME']:
                IS_DOCUMENT_DEL[attr] = request.args[attr]

            result = connection.call('/COE/RBP_PAM_DOCUMENT_CNT_DEL', IS_DOCUMENT_DEL=IS_DOCUMENT_DEL)

            connection_pool.put(connection)
            return to_json(result)
        else:
            connection_pool.put(connection)
            return serverError('DMS method not supported: %s' % method), 500

        connection_pool.put(connection)
        return to_json('ok')

    except Exception as ex:
       connection_pool.put(connection)
       return serverError(ex), 500

#====================================================================
#
# Excel files upload
#
#====================================================================

@app.route('/xlsd', methods=['POST'])
def xls_decode():
    try:
        if len(request.files) == 0:
            return serverError('No files sent'), 500

        for file_name in request.files:
            ofile = request.files[file_name]

        book = xlrd.open_workbook(file_contents=ofile.read())
        sh = book.sheet_by_index(0)
        header = None
        list = []
        JS_KEYS = ['material', 'serialNr', 'equiId', 'supEquiId', 'supLocId', 'notificationId', 'workOrderId' ]

        for rx in range(sh.nrows):
            line = {'index': rx}
            row = sh.row(rx)
            for i in range(len(JS_KEYS)):
                cell = row[i]
                if cell.ctype == xlrd.book.XL_CELL_NUMBER:
                    value = str(int(cell.value)).decode('utf-8')
                else:
                    value = cell.value
                line[JS_KEYS[i]] = value
            if rx == 0:
                header= line
            else:
                list.append(line)
        return to_json({'header': header, 'list': list})

    except Exception as ex:
        return serverError(ex), 500

#====================================================================
#
# Enterprise Search
#
#====================================================================

@app.route('/esearch', methods=['POST'])
def esearch():
    try:
        payload = json.loads(request.data)

        result = connection_pool.call('PAM_ES_SEARCH', payload)

        return to_json(result)

    except Exception, e:
        return serverError(e), 500

#====================================================================
#
# Login, Logout
#
#====================================================================

# login
@app.route('/login', methods=['POST','GET'])
def login():
    # connect to ABAP system
    abap = ABAPSYSTEM
    try:
        # add logon parameters to backend parameters
        if request.form.keys():
            # form data sent
            abap['user'] = request.form['user'].upper()
            abap['passwd'] = request.form['passwd']
            abap['lang']= request.form['lang']
        elif request.data:
            # json sent
            payload = json.loads(request.data)
            abap['user'] = payload['user'].upper()
            abap['passwd'] = payload['passwd']
            abap['lang']= payload['lang']
        else:
            return serverError('No logon data: %s' % request.headers['Content-Type']), 401

        if abap['user'] and abap['passwd']:
            print ('Connecting...')
            # save logon parameters for getting more connections later on
            session['user'] = abap['user']
            session['passwd'] = abap['passwd']
            session['lang'] = abap['lang']
            ex = connection_pool.login(session['user'])
            if ex: raise (ex)
            print ('logged in:', session['user'])
            # get user detail
            result = connection_pool.worker('BAPI_USER_GET_DETAIL', { 'USERNAME': abap['user'], 'CACHE_RESULTS': 'X' })
            # get search help instance with user specific parameters
            connection_pool.value_input_set(result['PARAMETER'])

            # only collective and non-technical (e.g. 'RFC') roles to frontend
            result['ACTIVITYGROUPS'][:] = [role for role in result['ACTIVITYGROUPS'] if not role['ORG_FLAG'].strip() and 'RFC' not in role['AGR_NAME'] ]

            return to_json({
              'user_params': result['PARAMETER'],
              'user_roles': result['ACTIVITYGROUPS'],
              'address': result['ADDRESS'],
              'backend': {'sysid': app_config['sysid'], 'client': ABAPSYSTEM['client'] },
              'commitHash': app_config['commitHash'],
              'RETURN': result['RETURN'] })

        return serverError('Logon error: user or password missing'), 401

    except Exception, e:
        return serverError(e), 500

# logout
@app.route('/logout', methods=['GET','POST'])
def logout():
    try:
        if session:
            print 'Session:', session
            if 'user' in session:
                connection_pool.logout(session['user'])
                session.pop('user')

        # return redirect(url_for('login'))
        return to_json({'status': True})

    except Exception, e:
        return serverError(e), 500

#====================================================================
#
# Utilities
#
#====================================================================

def serverError(e):
    if type(e) is str:
        # app server error
        print ('server error:', e, type(e))
        return to_json({'serverError': e})

    if hasattr(e, 'msg_v1'):
        # rfc exception
        print ('rfc error:', e, type(e))
        error = {}
        ex_type_full = str(type(e))
        error['type'] = ex_type_full[ex_type_full.rfind(".")+1:ex_type_full.rfind("'")]
        error['code'] = e.code if hasattr(e, 'code') else '<None>'
        error['key'] = e.key if hasattr(e, 'key') else '<None>'
        error['message'] = e.message # can be multi-line, "\n" separated
        if hasattr(e, 'msg_number'):
            if e.msg_number:
                error['abap_message'] = '%s %s %s' % (e.msg_type, e.msg_class, e.msg_number)
            if e.msg_v1:
                error['abap_message'] += ' %s' % e.msg_v1
            if e.msg_v2:
                error['abap_message'] += ' %s' % e.msg_v2
            if e.msg_v3:
                error['abap_message'] += ' %s' % e.msg_v3
            if e.msg_v4:
                error['abap_message'] += ' %s' % e.msg_v4

        print ('rfcError:', error, type(error), to_json(error))
        return to_json({'rfcError': error})

    if hasattr(e, 'message'):
        # app server exception
        print ('Exception error:',  e.message)
        return to_json({'serverError': e.message})

    print ('unknown error type:', type(e))
    print ('error:', e)
    return to_json({'error:', e})

#====================================================================
#
# Value Input Helps
#
#====================================================================

# Field Values
@app.route('/fieldvalues/<path:path>', methods=['POST'])
def fieldvalues(path):
    try:
        result = connection_pool.value_input_get().get_field_values(path)['ET_VALUES']
        return to_json (result, True)
    except Exception as ex:
        return serverError(ex), 500

# Lookup Values
@app.route('/valuelist', methods=['POST'])
def valuelist():
    try:
        payload = json.loads(request.data)
        rfm = payload['__rfm']
        del payload['__rfm']
        connection = connection_pool.get()
        if payload:
            result = connection.call(rfm, **payload)
        else:
            result = connection.call(rfm)
        connection_pool.put(connection)
        return to_json(result[result.keys()[0]]) # only array returned

    except Exception as ex:
        connection_pool.put(connection)
        return serverError(ex), 500

# Table Lookups (not for production !)
@app.route('/tabselect', methods=['POST','GET'])
def tabselect():
    try:
        payload = json.loads(request.data)
        connection = connection_pool.get()
        result = connection.call('/COE/RBP_PAM_DYNAMIC_SELECT', **payload)
        # replace EV_RESULT_JSON with deserialized ET_RESULT
        ev_result = json.loads(result['EV_RESULT_JSON'])
        result['ET_RESULT'] = ev_result[ev_result.keys()[0]]
        del result['EV_RESULT_JSON']
        connection_pool.put(connection)
        return to_json(result)

    except Exception as ex:
        connection_pool.put(connection)
        return serverError(ex), 500


# get Search metadata
@app.route('/helpselect', methods=['POST'])
def helpselect():
    try:
        payload = json.loads(request.data)
        shlpname = '%s %s' % (payload['type'], payload['id'])
        if not shlpname:
            raise Exception('help id missing')
        result = connection_pool.value_input_get().get_shelp_descriptor(shlpname)
        return to_json (result)

    except Exception as ex:
        return serverError(ex), 500

# do the Search
@app.route('/search', methods=['POST'])
def search():
    try:
        payload = json.loads(request.data)
        shlpname = payload['shlpname']
        selection = payload['selection'] if 'selection' in payload else []
        maxrows = int(payload['maxrows']) if 'maxrows' in payload else 0
        compact = payload['compact'] if 'compact' in payload else False
    except Exception as ex:
        return serverError(ex.message), 500

    try:
        result = connection_pool.value_input_get().search(shlpname, selection, maxrows, compact)
        if 'error' in result:
            raise Exception (result['error'])
        else:
            return to_json(result)

    except Exception as ex:
        return serverError(ex), 500

#====================================================================
#
# Server start
#
#====================================================================

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=app_config['port'])

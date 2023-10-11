import {HttpClient, json} from 'aurelia-fetch-client';
import {UIEvent} from './ui-event';
import {UIApplication} from './ui-application';

import {UIConfigServer} from './ui-constants';

export class UIHttpService {

  static inject = [HttpClient, UIApplication];

  constructor(httpClient, app) {
    this.httpClient = httpClient;
    this.app = app;
    this.app.info(this.constructor.name, 'Initialized');

    let self = this;

    httpClient.configure(config => {
      let httpConfig = this.app.get('httpConfig');
      //let app = UIConfigServer.app;
      this.__httpDefaults = httpConfig.defaults;
      this.__apiPrefix = UIConfigServer.api.prefix;
      //let serverUrl = `${app.host}:${app.port}`;
      config
      //.withBaseUrl(serverUrl) // todo enable for production ?
        .withDefaults(this.__httpDefaults)
        .withInterceptor({
          request(request) {
            // self.app.info(self.constructor.name, `Requesting ${request.method} ${request.url}`, request);
            self.app.IsHttpInUse = true;
            // request.url = encodeURI(request.url);
            // todo request.credentials = 'include';
            return request;
          },
          response(response) {
            //self.app.info(self.constructor.name, `Response ${response.url} ${response.status}`, response);

            self.app.IsHttpInUse = false;

            if (response instanceof TypeError) throw Error(response.message);

            if (response.status === 401) UIEvent.broadcast('Unauthorized', null);

            if (response.status !== 200) throw response;

            return response;
          },
          requestError(error) {
            this.app.debug('request error::', error);
            self.app.IsHttpInUse = false;
            throw error;
          },
          responseError(error) {
            this.app.debug('response error::', error);
            self.app.IsHttpInUse = false;
            throw error;
          }
        });
      this.app.info(this.constructor.name, 'configured', UIConfigServer, httpConfig);
    });
  }

  //**** SHARED METHODS ****//
  get(slug) {
    this.app.debug(this.constructor.name, `get [${slug}]`);
    return this.httpClient
      .fetch(slug, {
        method: 'get',
        //mode: 'cors',
        headers: this.__getHeaders(),
        credentials: 'include'
      })
      .then(response => response.json());
  }

  put(slug, obj) {
    this.app.debug(this.constructor.name, `put [${slug}]`);
    return this.httpClient
      .fetch(slug, {
        method: 'put',
        body: json(obj),
        //mode: 'cors',
        headers: this.__getHeaders(),
        credentials: 'include'
      })
      .then(response => response.json());
  }

  post(slug, obj) {
    this.app.debug(this.constructor.name, `post [${slug}]`, obj);
    return this.httpClient
      .fetch(slug, {
        method: 'post',
        body: json(obj),
        //mode: 'cors',
        headers: this.__getHeaders(),
        credentials: 'include'
      })
      .then(response => response.json());
  }

  delete(slug) {
    slug = this.__apiPrefix + slug;
    this.app.debug(this.constructor.name, `delete [${slug}]`);
    return this.httpClient
      .fetch(slug, {
        method: 'delete',
        mode: 'cors',
        headers: this.__getHeaders(),
        credentials: 'include'
      })
      .then(response => response.json());
  }

  upload(slug, files, payload = {}) {
    slug = this.__apiPrefix + slug;
    this.app.debug(this.constructor.name, `upload [${slug}]`, files, payload);
    return this.__upload('post', slug, files, payload);
  }

  reupload(slug, files, payload = {}) {
    this.appe.debug(this.constructor.name, `reupload [${slug}]`, files, payload);
    return this.__upload('put', slug, files, payload);
  }

  __upload(method, slug, files = [], payload = {}) {
    if (! Array.isArray(files)) {
      this.app.toastError(`Files for upload of the type [${typeof files}], should be Array ?`);
      return;
    }
    if (files.length === 0) {
      this.app.toastWarning('No files for upload');
    }
    let data = new FormData();
    // add files
    let i = 1;
    for (let f of files) {
      payload.FILE_NAME = f.name;
      payload.MIMETYPE = f.file.type;
      payload.DESCRIPTION = f.description;
      data.append(f.file.name || ('file' + (i++)), f.file, f.file.name);

      //console.log(f, dms)
    }
    // add payload parameters
    for (let a of Object.keys(payload)) {
      data.append(a, payload[a]);
    }
    return this.httpClient
      .fetch(slug, {
        method: method,
        body: data,
        mode: 'cors',
        headers: this.__getHeaders(),
        credentials: 'include'
      })
      .then(resp => resp.json());
  }

  __getHeaders() {
    let headers = this.__httpDefaults.Headers;

    if (this.app.AllowAuthHeader &&
      this.app.Username !== null) {
      let token = this.app.AuthUser + ':' + this.app.AuthToken;
      let hash = btoa(token);
      headers.Authorization = 'Basic ' + hash;
    }
    return headers;
  }

  backend(route, TO_ABAP = {}) {
    route = this.__apiPrefix + route;
    return new Promise((resolve, reject) => {
      //this.app.debug(this.constructor.name, 'backend::to::', route, TO_ABAP);
      this.post(route, TO_ABAP)
        .then(FROM_ABAP => {
          this.app.debug(this.constructor.name, 'backend::from::', route, FROM_ABAP);
          // check for errors
          if (FROM_ABAP && !FROM_ABAP.RETURN && FROM_ABAP.ET_RETURN) {
            FROM_ABAP.RETURN = FROM_ABAP.ET_RETURN;
          }

          if (FROM_ABAP && FROM_ABAP.RETURN) {
            // check if 'E' errors - todo: is this check enough ?
            let returnTable = (Object.prototype.toString.call(FROM_ABAP.RETURN) === '[object Array]');
            let returnType = '';

            if (returnTable) {
              for (let returnLine of FROM_ABAP.RETURN) {
                if (returnLine.TYPE === 'E') {
                  returnType = 'E';
                  break;
                }
              }
            }
            else returnType = FROM_ABAP.RETURN.TYPE;

            if (returnType === 'E') {
              // backend application error(s)
              let appErrors = [];
              if (returnTable) {
                for (let returnLine of FROM_ABAP.RETURN) {
                  appErrors.push({
                    type: 'error',
                    message: `BAPIRET ${returnLine.TYPE} ${returnLine.NUMBER} ${returnLine.MESSAGE}`
                  });
                }
              }
              else {
                appErrors.push({
                  type: 'error',
                  message: `BAPIRET ${FROM_ABAP.RETURN.TYPE} ${FROM_ABAP.RETURN.NUMBER} ${FROM_ABAP.RETURN.MESSAGE}`
                });
              }

              reject(appErrors);
            }
          }
          resolve(FROM_ABAP);
        })

        .catch(error => {
          if (error.status === 404) {
            if (!route) route = `[${route}]`;
            reject({
              type: 'error',
              message: `[404] Route ${route} not found on ${UIConfigServer.host}` //:${app.port}`
            });
          }
          else if (error.status === 405) {
            if (!route) route = `[${route}]`;
            reject({
              type: 'error',
              message: `[405] method not allowed for ${route} on ${uiconfigserver.host}` // :${app.port}`
            });
          }
          else {
            error.json()
              .then(errorInfo => {
                let appError = {type: 'error', message: 'server error'};
                if (errorInfo.rfcError) {
                  // Server responded with RFC error object
                  appError = {type: 'error', message: errorInfo.rfcError.message};
                }
                else if (errorInfo.serverError) {
                  // Server responded with error string
                  let errorText = (errorInfo.serverError === 'logged_in') ?
                    'Not logged in.' : errorInfo.serverError;
                  appError = {type: 'error', message: errorText};
                }
                else {
                  // Unknown error type, should not happen
                  appError = {type: 'error', message: JSON.stringify(errorInfo)};
                }
                reject(appError);
              })
              .catch(() => {
                // Network error or server not running
                reject({
                  type: 'error',
                  //message: `Network error or the server on ${app.host}:${app.port} is not running ?`
                  message: `Network error or the server on ${UIConfigServer.host} is not running ?`
                });
              });
          }
        });
    });
  }
}

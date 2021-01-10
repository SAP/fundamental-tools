# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-

catalog = {
    "TRANSPORT": [
        "CTS_API_CREATE_CHANGE_REQUEST",
        "BAPI_CTREQUEST_CREATE",
        "BAPI_CTREQUEST_CREATE_TASKS",
    ],
    "PLM": [
        # "/COE/RBP_PAM_ES_SEARCH",
        # "/COE/RBP_PAM_DOCFLOW_GET",
        # "/COE/RBP_PAM_DOCUMENT_SEARCH",
        # "/COE/RBP_PAM_DOCUMENT_CNT_GET",
        # "/COE/RBP_PAM_DOCUMENT_CNT_UPL",
        # "/COE/RBP_PAM_DOCUMENT_CNT_DEL",
        "/COE/RBP_PAM_FUNC_LOC_GETLIST",
        "/COE/RBP_PAM_EQUIPMENT_GETL",
        "/COE/RBP_PAM_EQUIPMENT_GET",
        "/COE/RBP_PAM_EQUIP_HIER_GET",
        "/COE/RBP_PAM_EQUIPMENT_CHANGE",
        "/COE/RBP_PAM_EQUIPMENT_INSTALL",
        "/COE/RBP_PAM_EQUIPMENT_DISMTLE",
        # "/COE/RBP_PAM_MAINTPLAN_GET",
        # "/COE/RBP_PAM_MAINTPLAN_CREATE",
        # "/COE/RBP_PAM_EMPL_USER_INF_GET",
        # "/COE/RBP_PAM_FUNC_LOC_GETLIST",
        # "/COE/RBP_PAM_NOTIF_CREATE",
        # "/COE/RBP_PAM_NOTIF_CHANGE",
        # "/COE/RBP_PAM_NOTIFICATION_GET",
        # "/COE/RBP_PAM_NOTIFICATION_GETL",
        # "/COE/RBP_PAM_SERVICE_ORD_CREAT",
        # "/COE/RBP_PAM_SERVICE_ORD_GETL",
        # "/COE/RBP_PAM_SERVICE_ORD_GET",
        # "/COE/RBP_PAM_SERVICE_ORD_CHANG",
        # "/COE/RBP_PAM_SERVICE_ORD_CC ",
        # "/COE/RBP_PAM_CONFIRM_CREATE",
        # "/COE/RBP_PAM_CONFIRM_GET",
        # "/COE/RBP_PAM_CONFIRM_GETL",
        # "/COE/RBP_PAM_SYMPSOL_SEARCH",
        # "/COE/RBP_PAM_SOLUTION_DET_GET",
    ],
    "__TEST__": ["/COE/RBP_FE_DATATYPES"],
    # 'Adobe': [
    #    'ZCREATE_MAT_10305_1'
    # ],
    "EQUIPMENT": [
        "BAPI_EQUI_CHANGE",  # Change Equipment
        "BAPI_EQUI_CREATE",  # Create Equipment
        "BAPI_EQUI_CREATE_BY_REFERENCE",  # BAPI PM: Anlegen Equipment mit Vorlageequipment
        # Install Equipment (Functional Location, Superior Equipment)
        "BAPI_EQUI_DISMANTLE",
        "BAPI_EQUI_GETDETAIL",  # Read Equipment
        "BAPI_EQUI_GETLIST",  # BAPI PM: Selection of Equipment List
        # PM BAPI: Read (System-/User-)Status Equi
        "BAPI_EQUI_GETSTATUS",
        # PM BAPI: Install Equipment (Functional Location, Superior Equipment)
        "BAPI_EQUI_INSTALL",
    ],
    "PLANNED_ORDER": [
        "BAPI_PLANNEDORDER_CHANGE",  # Change planned order
        "BAPI_PLANNEDORDER_CREATE",  # Create planned order
        "BAPI_PLANNEDORDER_DELETE",  # Delete planned order
        "BAPI_PLANNEDORDER_EXIST_CHECK",  # Planned order existence check
        "BAPI_PLANNEDORDER_GET_DETAIL",  # Get details for planned order
        "BAPI_PLANNEDORDER_GET_DET_LIST",  # Get detailed planned order list
    ],
    "PURCHASE_ORDER": [
        "BAPI_PO_CREATE",  # Create Purchase Order
        "BAPI_PO_GETDETAIL",  # Display Purchase Order Details
        "BAPI_PO_GETITEMS",  # List Purchase Order Items
        # List Purchase Orders for Release (Approval): New as of 4.0A
        "BAPI_PO_GETITEMSREL",
        # Display Detailed Release (Approval) Information on Purchase Order
        "BAPI_PO_GETRELINFO",
        "BAPI_PO_GET_LIST",  # List Purchase Orders - Only up to 4.0A
        "BAPI_PROCOPERATION_GETCATALOGS",  # Determine Valid Catalogs as Value Help
        # Analysis of Objects to Be Generated in Purchasing
        "BAPI_PROCOPERATION_GETINFO",
    ],
    "PRODUCTION_ORDER": [
        "BAPI_PRODORD_CHANGE",  # BAPI: Change Production Order
        # BAPI: Execute Material Availability Check for Production Orders
        "BAPI_PRODORD_CHECK_MAT_AVAIL",
        "BAPI_PRODORD_CLOSE",  # BAPI: Close Production Orders
        "BAPI_PRODORD_COMPLETE_TECH",  # BAPI: Technically Complete Production Orders
        "BAPI_PRODORD_COSTING",  # BAPI: Carry Out Costing for Production Orders
        "BAPI_PRODORD_CREATE",  # BAPI: Generate Production Order
        # BAPI: Create Capacity Requirements for Production Orders
        "BAPI_PRODORD_CREATE_CAP_REQ",
        # BAPI: Convert Planned Order into Production Order
        "BAPI_PRODORD_CREATE_FROM_PLORD",
        # BAPI: Create Production Order with Reference Order
        "BAPI_PRODORD_CREATE_FROM_REF",
        "BAPI_PRODORD_EXIST_CHECK",  # BAPI: Check Existence of a Production Order
        "BAPI_PRODORD_GET_DETAIL",  # BAPI: Output Details of a Production Order
        # BAPI: Output Production Order Header Data in a List
        "BAPI_PRODORD_GET_LIST",
        "BAPI_PRODORD_RELEASE",  # BAPI: Release Production Orders
        # BAPI: Reset User Status for Production Orders at Header Level
        "BAPI_PRODORD_REVOKEUSERSTATUS",
        "BAPI_PRODORD_SCHEDULE",  # BAPI: Schedule Production Orders
        # BAPI: Set User Status for Production Orders at Header Level
        "BAPI_PRODORD_SETUSERSTATUS",
        # BAPI: Set Deletion Flag for Production Orders
        "BAPI_PRODORD_SET_DELETION_FLAG",
        # BAPI: Set Deletion Indicator for Production Orders
        "BAPI_PRODORD_SET_DEL_INDICATOR",
        # BAPI: Execute WM Material Staging for Production Orders
        "BAPI_PRODORD_WM_MAT_STAGING",
    ],
    "PROCESS_ORDER": [
        "BAPI_PROCORD_CHANGE",  # BAPI: Change Process Order
        # BAPI: Execute Material Availability Check for Process Orders
        "BAPI_PROCORD_CHECK_MAT_AVAIL",
        "BAPI_PROCORD_CLOSE",  # BAPI: Close Process Orders
        "BAPI_PROCORD_COMPLETE_TECH",  # BAPI: Technically Complete Process Orders
        "BAPI_PROCORD_COSTING",  # BAPI: Carry Out Costing for Process Orders
        "BAPI_PROCORD_CREATE",  # BAPI: Generate Process Order
        # BAPI: Create Capacity Requirements for Process Orders
        "BAPI_PROCORD_CREATE_CAP_REQ",
        # BAPI: Convert Planned Order into Process Order
        "BAPI_PROCORD_CREATE_FROM_PLORD",
        "BAPI_PROCORD_CREATE_FROM_REF",  # BAPI: Create Process Order with Reference Order
        "BAPI_PROCORD_EXIST_CHECK",  # BAPI: Check Existence of a Process Order
        "BAPI_PROCORD_GET_DETAIL",  # BAPI: Output Details of a Process Order
        "BAPI_PROCORD_GET_LIST",  # BAPI: Output Process Order Header Data in a List
        "BAPI_PROCORD_RELEASE",  # BAPI: Release Process Orders
        # BAPI: Reset User Status for Process Orders at Header Level
        "BAPI_PROCORD_REVOKEUSERSTATUS",
        "BAPI_PROCORD_SCHEDULE",  # BAPI: Schedule Process Orders
        # BAPI: Set User Status for Process Orders at Header Level
        "BAPI_PROCORD_SETUSERSTATUS",
        "BAPI_PROCORD_SET_DELETION_FLAG",  # BAPI: Set Deletion Flag for Process Orders
        # BAPI: Set Deletion Indicator for Process Orders
        "BAPI_PROCORD_SET_DEL_INDICATOR",
        # BAPI: Execute WM Material Staging for Process Orders
        "BAPI_PROCORD_WM_MAT_STAGING",
    ],
    "TRANSFER_ORDER": [
        "BAPI_WHSE_TO_CREATE_STOCK",  # BAPI for Stock Data per Quant
        "BAPI_WHSE_TO_GET_DETAIL",  # BAPI for Header and Item Data per Transfer Order
        "BAPI_WHSE_TO_GET_LIST",  # BAPI for Transfer Order List
    ],
    "KANBAN": [
        "BAPI_KANBAN_CHANGE",  # BAPI: Change Kanban Data
        "BAPI_KANBAN_CHANGESTATUS1",  # Change Status of a Kanban
        # Determination of Kanbans Matching Selection Criteria
        "BAPI_KANBAN_GETLIST",
        # Provide KANBAN data for vendors 2nd version (new address fields)
        "BAPI_KANBAN_GETLISTFORSUPPLIE1",
        # Determination of Kanbans Matching Selection Criteria
        "BAPI_KANBAN_GETLIST_ALL",
        "BAPI_KANBAN_SETINPROCESS",  # Set Kanban Status to IN PROCESS
    ],
    "SALES_ORDER": [
        "BAPI_SALESORDER_CREATEFROMDAT2",  # Sales order: Create Sales Order
        "BAPI_SALESORDER_CHANGE",  # Sales order: Change Sales Order
        "BAPI_SALESORDER_GETLIST",  # Sales order: List of all Orders for Customer '
        "BAPISDORDER_GETDETAILEDLIST",  # Kundenauftrag: Liste aller Auftragsdaten,
        "BAPI_SALESORDER_CONFIRMDELVRY",
        "BAPI_SALESORDER_GETSTATUS",  # Sales Order: Display Status
        "BAPI_SALESORDER_SIMULATE",  # ales Order: Simulate Sales Order
    ],
    "PERSONAL_DATA": [
        "BAPI_PERSDATA_CHANGE",  # Change personal data
        "BAPI_PERSDATA_CREATE",  # Create personal data
        "BAPI_PERSDATA_CREATESUCCESSOR",  # Create subs.personal data record
        "BAPI_PERSDATA_DELETE",  # Delete personal data
        "BAPI_PERSDATA_DELIMIT",  # Delimit personal data validity period
        "BAPI_PERSDATA_GETDETAIL",  # Read personal data
        "BAPI_PERSDATA_GETDETAILEDLIST",  # Read instances with data
        "BAPI_PERSDATA_GETLIST",  # Read instances
        "BAPI_PERSDATA_SIMULATECREATION",  # Simulation: Create personal data
    ],
    "INSPECTION_LOT": [
        # Load Inspection Specifications for an Inspection Lot Charac.
        "BAPI_INSPCHAR_GETREQUIREMENTS",
        "BAPI_INSPCHAR_GETRESULT",  # Load Inspection Results
        "BAPI_INSPCHAR_SETRESULT",  # Confirm Inspection Results
        # Load Detail Data and Usage Decision for Inspection Lot
        "BAPI_INSPLOT_GETDETAIL",
        "BAPI_INSPLOT_GETLIST",  # Select Inspection Lots
        "BAPI_INSPLOT_GETOPERATIONS",  # Select Inspection Operations for Inspection Lots
        "BAPI_INSPLOT_GETSTATUS",  # Get Current Status Information for Inspection Lot
        "BAPI_INSPLOT_SETUSAGEDECISION",  # Automatic Usage Decision
        "BAPI_INSPOPER_ACKNOWLEDGE",  # Confirm Receipt of Handheld Worklist
        "BAPI_INSPOPER_GETCHAR",  # Select Inspection Characteristics
        "BAPI_INSPOPER_GETDETAIL",  # Read Detail Data for Inspection Operation
        "BAPI_INSPOPER_GETLIST",  # Select Inspection Operations for Inspection Lots
        "BAPI_INSPOPER_RECORDRESULTS",  # Confirm Inspection Results
        "BAPI_INSPPOINT_CHANGE",  # Change Inspection Point
        "BAPI_INSPPOINT_CREATEFROMDATA",  # Create Inspection Point
        "BAPI_INSPPOINT_GETLIST",  # Select Inspection Points
        # Load Inspection Specifications and Inspection Points
        "BAPI_INSPPOINT_GETREQUIREMENTS",
    ],
    "BUSINESS_PARTNER": [
        # IS-H: BAPI BusPartner.Change - Change Business Partner
        "BAPI_BUSPARTNER_CHANGE",
        # IS-H: BAPI BusPartner.Create - Create Business Partner
        "BAPI_BUSPARTNER_CREATE",
        # IS-H: BAPI BusPartner.GetDetail - Display Business Partner Details
        "BAPI_BUSPARTNER_GETDETAIL",
        # IS-H: Find and Display all General Business Partners
        "BAPI_BUSPARTNER_GETLIST",
        # IS-H: Find and Display Business Partners in Function "IS-H Customer"
        "BAPI_BUSPARTNER_GETLISTCUST",
        # IS-H: Find and Display Business Partners in Function "Employer"
        "BAPI_BUSPARTNER_GETLISTEMPL",
        # IS-H: Find and Display Business Partners in Function "Hospital"
        "BAPI_BUSPARTNER_GETLISTHOSP",
        # IS-H: Find and Display Business Partners in Function "Insurance Provider"
        "BAPI_BUSPARTNER_GETLISTINSPROV",
        # IS-H: Find and Display Business Partners in Function "Person"
        "BAPI_BUSPARTNER_GETLISTPERSON",
    ],
    "WORK_ORDER": [
        "BAPI_ALM_COMPONENT_GET_DETAIL",  # Read Detail Data for a Component
        "BAPI_ALM_OPERATION_GET_DETAIL",  # Read Detail Data for an Operation
        # Determination of a List of Maintenance/Service Orders from Selection
        "BAPI_ALM_ORDERHEAD_GET_LIST",
        # Determination of a List of Operations from Selection
        "BAPI_ALM_ORDEROPER_GET_LIST",
        "BAPI_ALM_ORDER_GET_DETAIL",  # Reading of Detail Data for an Order
        "BAPI_ALM_ORDER_MAINTAIN",  # Process Maintenance-/Service Order
    ],
    "WORK_ORDER_CONFIRMATION": [
        "BAPI_ALM_CONF_CANCEL",  # Cancel confirmation for maintenance/service order
        "BAPI_ALM_CONF_CREATE",  # Create confirmation for maintenance/service order
        "BAPI_ALM_CONF_GETDETAIL",  # Detailed data for maintenance/service order confirmation
        "BAPI_ALM_CONF_GETLIST",  # List of maintenance/service order confirmations
        "BAPI_ALM_GET_PROP",  # Propose Data for Time Confirmation
    ],
    "PMCS_NOTIFICATION": [
        "BAPI_ALM_NOTIF_CHANGEUSRSTAT",  # Change User Status of a PM/CS Notification
        "BAPI_ALM_NOTIF_CLOSE",  # Complete PM/CS Notification
        "BAPI_ALM_NOTIF_CREATE",  # Create PM/CS Notification
        "BAPI_ALM_NOTIF_DATA_ADD",  # PM/CS Notification: Add Data
        "BAPI_ALM_NOTIF_DATA_DELETE",  # PM/CS Notification: Delete Data
        "BAPI_ALM_NOTIF_DATA_MODIFY",  # PM/CS Notification: Change Data
        "BAPI_ALM_NOTIF_GET_DETAIL",  # PM/CS Notification: Read Detail Data
        "BAPI_ALM_NOTIF_LIST_EQUI",  # Select PM/CS Notifications by Equipment
        # Select PM/CS Notifications by Functional Locations
        "BAPI_ALM_NOTIF_LIST_FUNCLOC",
        "BAPI_ALM_NOTIF_LIST_PARTNER",  # Select PM/CS Notifications by Partners
        # Select PM/CS Notifications by Maintenance Planner Group
        "BAPI_ALM_NOTIF_LIST_PLANGROUP",
        "BAPI_ALM_NOTIF_LIST_SORTFIELD",  # Select PM/CS Notifications by Sort Field
        "BAPI_ALM_NOTIF_POSTPONE",  # Reset PM/CS Notification
        "BAPI_ALM_NOTIF_PUTINPROGRESS",  # Release PM/CS Notification
        "BAPI_ALM_NOTIF_SAVE",  # Save PM/CS Notification
        "BAPI_ALM_NOTIF_TASK_COMPLETE",  # PM/CS Notification: Complete Task
        "BAPI_ALM_NOTIF_TASK_RELEASE",  # PM/CS Notification: Release Task
        "BAPI_ALM_NOTIF_TASK_SUCCESS",  # PM/CS Notification: Set Task to Successful
    ],
    "SERVICE_MASTER_RECORD": [
        "BAPI_SERVICE_CHANGE",  # BAPI to Change a Service Master Record
        "BAPI_SERVICE_CREATE",  # Creation of a Service Master Record
        "BAPI_SERVICE_GET_DETAIL",  # Read Detailed Data for a Service Master Record
        "BAPI_SERVICE_GET_LIST",  # List Display for Service Master Records
    ],
    "FI": ["BAPI_ACC_DOCUMENT_POST"],
}


# default set of RFMs, if no rfm names arguments supplied
rfm_sets = [
    # 'BUSINESS_PARTNER',
    "EQUIPMENT",
    # 'FI',
    # 'INSPECTION_LOT',
    # 'KANBAN',
    # 'PERSONAL_DATA',
    # 'PLANNED_ORDER',
    # "PLM",
    # 'PMCS_NOTIFICATION',
    # 'PLANNED_ORDER',
    # 'PROCESS_ORDER',
    # 'PRODUCTION_ORDER',
    "PURCHASE_ORDER",
    # 'SALES_ORDER',
    # 'SERVICE_MASTER_RECORD',
    # 'TRANSFER_ORDER',
    # 'TRANSPORT',
    # 'WORK_ORDER',
    # 'WORK_ORDER_CONFIRMATION',
    "__TEST__"
]

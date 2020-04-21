export var ORDER_NOW_PAGE = 'order-now';
export var ORDER_INFO_PAGE = 'order-info';
export var ORDER_DETAILS_PAGE = 'view-order';
export var ORDER_LIST_PAGE = 'assignment-list';

export var ORDER_NOW_PAGE_URL = '/assignment/' + ORDER_NOW_PAGE;
export var ORDER_INFO_PAGE_URL = '/assignment/' + ORDER_INFO_PAGE;
export var ORDER_DETAILS_PAGE_URL = '/assignment/' + ORDER_DETAILS_PAGE;
export var ORDER_LIST_PAGE_URL = '/assignment/' + ORDER_LIST_PAGE;

export var HOME_PAGE_URL = '/home';
export var ORDER_DATA_STORAGE_KEY = 'orderData';
export var ORDER_EDIT_DATA_STORAGE_KEY = 'orderEditData';

/**
 * FORM STATES
 */
export const FORM_STATE_INFO = 'info';
export const FORM_STATE_DETAILS = 'details';
export const FORM_STATE_DATA = 'data';
export const FORM_STATE_INVOICE = 'invoice';


/**
 * FORM WIDGET EVENTs
 */
export const TRANSITION_TO_INFO_STATE = 'TRANSITION_TO_INFO_STATE'
export const TRANSITION_TO_DETAILS_STATE = 'TRANSITION_TO_DETAILS_STATE'
export const TRANSITION_TO_DATA_STATE = 'TRANSITION_TO_DATA_STATE';
export const TRANSITION_TO_INVOICE_STATE = 'TRANSITION_TO_INVOICE_STATE'

export const TRANSITION_TO_CONTENT_INFO_STATE = 'TRANSITION_TO_CONTENT_INFO_STATE'
export const TRANSITION_TO_CONTENT_DETAILS_STATE = 'TRANSITION_TO_CONTENT_DETAILS_STATE'
export const TRANSITION_TO_CONTENT_DATA_STATE = 'TRANSITION_TO_CONTENT_DATA_STATE';
export const TRANSITION_TO_CONTENT_INVOICE_STATE = 'TRANSITION_TO_CONTENT_INVOICE_STATE'

/* Academic Order Wizard States */
export const AOW_START_STATE = 'AOW_START_STATE';
export const AOW_INFO_STATE = 'AOW_INFO_STATE';
export const AOW_DETAILS_STATE = 'AOW_DETAILS_STATE';
export const AOW_DATA_STATE = 'AOW_DATA_STATE';
export const AOW_INVOICE_STATE = 'AOW_INVOICE_STATE';
export const AOW_CONFIRMED_STATE = 'AOW_CONFIRMED_STATE';
export const AOW_END_STATE = 'AOW_END_STATE';

/* Content Order Wizard States */
export const COW_START_STATE = 'COW_START_STATE';
export const COW_INFO_STATE = 'COW_INFO_STATE';
export const COW_DETAILS_STATE = 'COW_DETAILS_STATE';
export const COW_DATA_STATE = 'COW_DATA_STATE';
export const COW_INVOICE_STATE = 'COW_INVOICE_STATE';
export const COW_CONFIRMED_STATE = 'COW_CONFIRMED_STATE';
export const COW_END_STATE = 'COW_END_STATE';

export const SERVICE_ORDER_TYPE_ACADEMIC = 'ACADEMIC_SERVICE_ORDER';
export const SERVICE_ORDER_TYPE_CONTENT = 'CONTENT_SERVICE_ORDER';
export const SERVICE_ORDER_QUEUE_NAME = 'SERVICE_ORDER_QUEUE';

export const CONTENT_ORDER_ENDPOINT = 'createContentOrderWebService';
export const ACADEMIC_ORDER_ENDPOINT = 'createAcademicOrderWebService';
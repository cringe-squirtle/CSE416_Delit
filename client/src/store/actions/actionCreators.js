// THIS FILE KNOWS HOW TO MAKE ALL THE ACTION
// OBJECDTS THAT WE WILL USE. ACTIONS ARE SIMPLE
// LITTLE PACKAGES THAT REPRESENT SOME EVENT
// THAT WILL BE DISPATCHED TO THE STORE, WHICH
// WILL TRIGGER THE EXECUTION OF A CORRESPONDING
// REDUCER, WHICH ADVANCES STATE

// THESE ARE ALL THE TYPE OF ACTIONS WE'LL BE CREATING
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const PASS_PROJECT_ID = 'PASS_PROJECT_ID';
export const TILESET_UNSELECT = 'TILESET_UNSELECT';
export const TILESET_SELECT = 'TILESET_SELECT';
export const TILESET_IMG_INIT = 'TILESET_IMG_INI';
export const WINDOW_SELECT = 'WINDOW_SELECT';
export const WINDOW_INIT = 'WINDOW_INIT';
export const WINDOW_MOVE = 'WINDOW_MOVE';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const MAP_SELECT_TOOL = "SELECT_TOOL";
export const PROPERTY_SELECT = 'PROPERTY_SELECT';
export const PROPERTY_UNSELECT = 'PROPERTY_UNSELECT';
export const PROPERTY_CHANGE = 'PROPERTY_CHANGE';
export const PROPERTY_DELETE = 'PROPERTY_DELETE';

export const LAYER_SELECT = 'LAYER_SELECT';
export const LAYER_UNSELECT = 'LAYER_UNSELECT';
export const LAYER_RENAME = 'LAYER_RENAME';
export const LAYER_DELETE = 'LAYER_DELETE';
export const LAYER_MOVE_UP = 'LAYER_MOVE_UP';
export const LAYER_MOVE_DOWN = 'LAYER_MOVE_DOWN';
export const LAYER_VISIBILITY_TOGGLE = 'LAYER_VISIBILITY_TOGGLE';
export const LAYER_LOCK_TOGGLE = 'LAYER_LOCK_TOGGLE';
export const LAYER_PASS_OPACITY = 'LAYER_PASS_OPACITY';
export const TOOLBAR_SELECT = 'TOOLBAR_SELECT';
export const TOOLBAR_UNSELECT = 'TOOLBAR_UNSELECT';

export const SCROLL_X = 'SCROLL_X';
export const SCROLL_Y = 'SCROLL_Y';


export const TEST_PROJECT_ADD = 'TEST_PROJECT_ADD';
export const TEST_MAP_ADD = 'TEST_MAP_ADD';
export const TEST_TILESET_ADD = 'TEST_TILESET_ADD';
export const TEST_CLEAR = 'TEST_CLEAR';

export const TEST_LAYER_ADD = 'TEST_LAYER_ADD';

export const FORMAT_PROJECT = 'FORMAT_PROJECT'
export const SELECT_PROPERTY_WINDOW = 'SELECT_PROPERTY_WINDOW'
export const TILESET_LOADED = 'TILESET_LOADED'
export const TILESET_ID_APPLIER = 'TILESET_ID_APPLIER'
export const ADD_LAYER = 'ADD_LAYER'
export const SELECT_TILESET_GRIDS = 'SELECT_TILESET_GRIDS'
export const SELECT_PROPERTY_TILE = 'SELECT_PROPERTY_TILE'
export const MAP_STAMP_CLICK = 'MAP_STAMP_CLICK'
export const MAP_FILL_CLICK = 'MAP_FILL_CLICK'
export const LAYER_RESTORE = 'LAYER_RESTORE'
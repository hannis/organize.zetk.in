// Flux actions relate to view state
export const SET_PANES_FROM_URL_PATH = 'SET_PANES_FROM_URL_PATH';
export const OPEN_PANE = 'OPEN_PANE';
export const CLOSE_PANE = 'CLOSE_PANE';
export const REPLACE_PANE = 'REPLACE_PANE';
export const PUSH_PANE = 'PUSH_PANE';
export const GOTO_SECTION = 'GOTO_SECTION';

// Flux actions related to users
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_MEMBERSHIPS = 'GET_USER_MEMBERSHIPS';
export const SET_ACTIVE_MEMBERSHIP = 'SET_ACTIVE_MEMBERSHIP';

// Redux actions related to people
export const CREATE_PERSON = 'CREATE_PERSON';
export const RETRIEVE_PEOPLE = 'RETRIEVE_PEOPLE';
export const RETRIEVE_PERSON = 'RETRIEVE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

// Flux actions related to person tags
export const CREATE_PERSON_TAG = 'CREATE_PERSON_TAG';
export const RETRIEVE_PERSON_TAG = 'RETRIEVE_PERSON_TAG';
export const RETRIEVE_PERSON_TAGS = 'RETRIEVE_PERSON_TAGS';
export const RETRIEVE_TAGS_FOR_PERSON = 'RETRIEVE_TAGS_FOR_PERSON';
export const UPDATE_PERSON_TAG = 'UPDATE_PERSON_TAG';
export const ADD_TAGS_TO_PERSON = 'ADD_TAGS_TO_PERSON';
export const REMOVE_TAG_FROM_PERSON = 'REMOVE_TAG_FROM_PERSON';

// Redux actions related to locations
export const CREATE_LOCATION = 'CREATE_LOCATION';
export const RETRIEVE_LOCATIONS = 'RETRIEVE_LOCATIONS';
export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const SET_PENDING_LOCATION = 'SET_PENDING_LOCATION';
export const CLEAR_PENDING_LOCATION = 'CLEAR_PENDING_LOCATION';

// Redux actions related to campaigns
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const RETRIEVE_CAMPAIGNS = 'RETRIEVE_CAMPAIGNS';
export const RETRIEVE_CAMPAIGN = 'RETRIEVE_CAMPAIGN';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN';
export const SELECT_CAMPAIGN = 'SELECT_CAMPAIGN';

// Redux actions related to activity
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const RETRIEVE_ACTIVITY = 'RETRIEVE_ACTIVITY';
export const RETRIEVE_ACTIVITIES = 'RETRIEVE_ACTIVITIES';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

// Redux actions related to campaign actions
export const RETRIEVE_ACTIONS = 'RETRIEVE_ACTIONS';
export const RETRIEVE_ACTION = 'RETRIEVE_ACTION';
export const UPDATE_ACTION = 'UPDATE_ACTION';
export const CREATE_ACTION = 'CREATE_ACTION';
export const DELETE_ACTION = 'DELETE_ACTION';
export const CLEAR_ACTION_HIGHLIGHTS = 'CLEAR_ACTION_HIGHLIGHTS';
export const SEND_ACTION_REMINDERS = 'SEND_ACTION_REMINDERS';
export const HIGHLIGHT_ACTIONS = 'HIGHLIGHT_ACTIONS';
export const HIGHLIGHT_ACTION_ACTIVITY = 'HIGHLIGHT_ACTION_ACTIVITY';
export const HIGHLIGHT_ACTION_LOCATION = 'HIGHLIGHT_ACTION_LOCATION';
export const HIGHLIGHT_ACTION_ACTIVITY_PHASE = 'HIGHLIGHT_ACTION_ACTIVITY_PHASE';
export const HIGHLIGHT_ACTION_LOCATION_PHASE = 'HIGHLIGHT_ACTION_LOCATION_PHASE';

// Flux actions related to action participants
export const RETRIEVE_ACTION_PARTICIPANTS = 'RETRIEVE_ACTION_PARTICIPANTS';
export const ADD_ACTION_PARTICIPANT = 'ADD_ACTION_PARTICIPANT';
export const MOVE_ACTION_PARTICIPANT = 'MOVE_ACTION_PARTICIPANT';
export const EXECUTE_ACTION_PARTICIPANT_MOVES = 'EXECUTE_ACTION_PARTICIPANT_MOVES';
export const UNDO_ACTION_PARTICIPANT_MOVES = 'UNDO_ACTION_PARTICIPANT_MOVES';
export const CLEAR_ACTION_PARTICIPANT_MOVES = 'CLEAR_ACTION_PARTICIPANT_MOVES';

// Flux actions related to dashboard
export const LOAD_WIDGET_DATA = 'LOAD_WIDGET_DATA';
export const MOVE_WIDGET = 'MOVE_WIDGET';

// Flux actions related to search
export const SEARCH = 'SEARCH';
export const BEGIN_SEARCH = 'BEGIN_SEARCH';
export const SEARCH_MATCH_FOUND = 'SEARCH_MATCH_FOUND';
export const CHANGE_SEARCH_SCOPE = 'CHANGE_SEARCH_SCOPE';
export const END_SEARCH = 'END_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

// Flux actions related to queries
export const RETRIEVE_QUERIES = 'RETRIEVE_QUERIES';
export const RETRIEVE_QUERY = 'RETRIEVE_QUERY';
export const RETRIEVE_QUERY_MATCHES = 'RETRIEVE_QUERY_MATCHES';
export const CREATE_QUERY = 'CREATE_QUERY';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_QUERY_FILTER = 'UPDATE_FILTER';
export const ADD_QUERY_FILTER = 'ADD_QUERY_FILTER';
export const REMOVE_QUERY_FILTER = 'REMOVE_QUERY_FILTER';

// Flux actions related to call assignments
export const CREATE_CALL_ASSIGNMENT = 'CREATE_CALL_ASSIGNMENT';
export const CREATE_CALL_ASSIGNMENT_DRAFT = 'CREATE_CALL_ASSIGNMENT_DRAFT';
export const RETRIEVE_CALL_ASSIGNMENTS = 'RETRIEVE_CALL_ASSIGNMENTS';
export const RETRIEVE_CALL_ASSIGNMENT = 'RETRIEVE_CALL_ASSIGNMENT';
export const UPDATE_CALL_ASSIGNMENT = 'UPDATE_CALL_ASSIGNMENT';
export const RETRIEVE_CALL_ASSIGNMENT_STATS = 'RETRIEVE_CALL_ASSIGNMENT_STATS';
export const RETRIEVE_CALL_ASSIGNMENT_CALLERS = 'RETRIEVE_CALL_ASSIGNMENT_CALLERS';
export const ADD_CALL_ASSIGNMENT_CALLERS = 'ADD_CALL_ASSIGNMENT_CALLERS';
export const REMOVE_CALL_ASSIGNMENT_CALLER = 'REMOVE_CALL_ASSIGNMENT_CALLER';
export const ADD_CALLER_PRIORITIZED_TAGS = 'ADD_CALLER_PRIORITIZED_TAGS';
export const REMOVE_CALLER_PRIORITIZED_TAGS = 'REMOVE_CALLER_PRIORITIZED_TAGS';
export const ADD_CALLER_EXCLUDED_TAGS = 'ADD_CALLER_EXCLUDED_TAGS';
export const REMOVE_CALLER_EXCLUDED_TAGS = 'REMOVE_CALLER_EXCLUDED_TAGS';

// Flux actions related to calls
export const RETRIEVE_CALLS = 'RETRIEVE_CALLS';
export const RETRIEVE_CALL = 'RETRIEVE_CALL';

// Flux actions related to text documents
export const CREATE_TEXT_DOCUMENT = 'CREATE_TEXT_DOCUMENT';
export const SAVE_TEXT_DOCUMENT = 'SAVE_TEXT_DOCUMENT';
export const FINISH_TEXT_DOCUMENT = 'FINISH_TEXT_DOCUMENT';

// Flux actions related to selections
export const CREATE_SELECTION = 'CREATE_SELECTION';
export const ADD_TO_SELECTION = 'ADD_TO_SELECTION';
export const REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION';
export const FINISH_SELECTION = 'FINISH_SELECTION';

// Flux actions related to import
export const PARSE_IMPORT_FILE = 'PARSE_IMPORT_FILE';
export const USE_IMPORT_TABLE_FIRST_AS_HEADER = 'USE_IMPORT_TABLE_FIRST_AS_HEADER';
export const UPDATE_IMPORT_COLUMN = 'UPDATE_IMPORT_COLUMN';

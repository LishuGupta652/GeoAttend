
export type AppStateType = {
    theme: THEME_TYPES;
};

export type THEME_TYPES = 'light' | 'dark';


export enum APP_STATE_ACTION {
    SET_APP_STATE = "SET_APP_STATE",
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME",
}


export type API_Response = any;
export type API_Response_Error = any;
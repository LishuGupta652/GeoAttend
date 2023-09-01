
export type AppStateType = {
    theme: THEME_TYPES;
};

export type THEME_TYPES = 'light' | 'dark';


export enum APP_STATE_ACTION {
    SET_APP_STATE = "SET_APP_STATE",
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME",
}

export type USER_TOKEN_TYPE = {
    name: string;
    email: string;
    _id: string;
    iat: number;
    exp: number;

}

export type LOGIN_USER_TYPE = {
    email: string;
    password: string;
}
export type SIGNUP_USER_TYPE = LOGIN_USER_TYPE & {
    name: string;
}

export type API_Response = any;
export type API_Response_Error = any;
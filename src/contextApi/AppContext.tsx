"use client";

import { createContext, Dispatch, useReducer } from "react";
import { AppStateType } from "../types/types";

const newInitialAppState: AppStateType = {
    theme: "light",
};

const initialAppState: AppStateType = JSON.parse(JSON.stringify(newInitialAppState));

export enum APP_STATE_ACTION {
    SET_APP_STATE = "SET_APP_STATE",
    SET_THEME = "SET_THEME",
    TOGGLE_THEME = "TOGGLE_THEME",
}


export type AppStateActionType<T extends APP_STATE_ACTION, U> = {
    type: T,
    payload: U
}

export type AppStateReducerActionType =
    | AppStateActionType<typeof APP_STATE_ACTION.SET_APP_STATE, AppStateType>
    | AppStateActionType<typeof APP_STATE_ACTION.SET_THEME, AppStateType["theme"]>
    | AppStateActionType<typeof APP_STATE_ACTION.TOGGLE_THEME, null>


export const appStateReducer = (state: AppStateType, action: AppStateReducerActionType): AppStateType => {
    switch (action.type) {
        case APP_STATE_ACTION.SET_APP_STATE:
            return action.payload;
        case APP_STATE_ACTION.SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        case APP_STATE_ACTION.TOGGLE_THEME: {
            const newTheme = state.theme === "light" ? "dark" : "light";
            return {
                ...state,
                theme: newTheme
            };
        }
        default:
            return state;
    }
}

export const AppContext = createContext<{
    state: AppStateType,
    dispatch: Dispatch<AppStateReducerActionType>
}>({
    state: initialAppState,
    dispatch: () => null
});


const AppContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer<
        React.Reducer<AppStateType, AppStateReducerActionType>
    >(appStateReducer, initialAppState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};


export default AppContextProvider;
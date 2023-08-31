"use client";

import { useEffect } from "react";
import { createContext, Dispatch, useReducer } from "react";
import { AppStateType, APP_STATE_ACTION, THEME_TYPES } from "../types/types";



export type AppStateActionTypeInterface<T extends APP_STATE_ACTION> = {
    type: T,
}

export type AppStateActionType<T extends APP_STATE_ACTION, U> = {
    type: AppStateActionTypeInterface<T>["type"],
    payload: U
}

export type AppStateReducerActionType =
    | AppStateActionType<typeof APP_STATE_ACTION.SET_APP_STATE, AppStateType>
    | AppStateActionType<typeof APP_STATE_ACTION.SET_THEME, AppStateType["theme"]>
    | AppStateActionTypeInterface<typeof APP_STATE_ACTION.TOGGLE_THEME>



const appStateReducer = (state: AppStateType, action: AppStateReducerActionType): AppStateType => {
    switch (action.type) {
        case APP_STATE_ACTION.SET_APP_STATE: {
            const updatedState = {
                ...state,
                ...action.payload
            };

            localStorage.setItem("appData", JSON.stringify(updatedState));
            return updatedState;
        }
        case APP_STATE_ACTION.SET_THEME: {
            const updatedState = {
                ...state,
                theme: action.payload
            };

            localStorage.setItem("appData", JSON.stringify(updatedState));
            return updatedState
        }
        case APP_STATE_ACTION.TOGGLE_THEME: {
            const newTheme = state.theme === "light" ? "dark" : "light" as THEME_TYPES;
            const updatedState = {
                ...state,
                theme: newTheme
            };

            localStorage.setItem("appData", JSON.stringify(updatedState));
            return updatedState;
        }
        default:
            return state;
    }
}


const getInitialTheme = (): THEME_TYPES => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches) {
        return "dark";
    }

    return "light";
}

const initialAppState: AppStateType = {
    theme: getInitialTheme(),
};

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

    useEffect(() => {
        const appDataFromLocalStorage: AppStateType = JSON.parse(localStorage.getItem("appData") || "{}") as AppStateType;

        if (appDataFromLocalStorage) {
            dispatch({
                type: APP_STATE_ACTION.SET_APP_STATE,
                payload: appDataFromLocalStorage
            });
        }
    }, [])
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

import { APP_STATE_ACTION, AppStateType, THEME_TYPES } from './../types/types';


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

export const appStateReducer = (state: AppStateType, action: AppStateReducerActionType): AppStateType => {
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

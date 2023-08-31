import { useEffect, createContext, Dispatch, useReducer, useMemo } from "react";
import { appStateReducer, AppStateReducerActionType } from "../reducers/appStateReducer";
import { AppStateType, APP_STATE_ACTION } from "../types/types";
import { getInitialTheme } from "../utils/helper";


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
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

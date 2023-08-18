"use client"

import React, { useContext } from 'react'
import { AppContext, APP_STATE_ACTION } from '../contextApi/AppContext';

const Child = () => {

    const { state, dispatch } = useContext(AppContext);

    const setState = () => {
        dispatch({
            type: APP_STATE_ACTION.TOGGLE_THEME,
            payload: null
        })
    };

    return (
        <>
            <div>Child</div>
            <div>{state.theme}</div>
            <button onClick={setState}>Button</button>
        </>
    )
}

export default Child
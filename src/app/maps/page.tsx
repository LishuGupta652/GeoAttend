"use client";
import React from 'react'
import { AppContext } from '../../contextApi/AppContext';

const page = () => {
    const { state } = React.useContext(AppContext);

    return (
        <div>page state : {state.theme} </div>
    )
}

export default page
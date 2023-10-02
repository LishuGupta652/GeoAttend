"use client";
import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"


const LocateStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #363636;
    color: #fff;
    font-weight: 600;
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    & > * {
        margin: 1rem;
    }
    & > button {
        padding: 5px 10px;
        border-radius: 4px;
        border: none;
        background-color: #fff;
        color: #363636;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
    }
    & > button:hover {
        background-color: #363636;
        color: #fff;
    }
    & > form > input {
        margin: 5px;
        border: none;
        font-weight: 600;
        cursor: pointer;
    }

    .red {
        color: red;

    }
`

const Locate = () => {
    const navigate = useNavigate();

    const [name, setName] = React.useState('')
    const [error, setError] = React.useState('')

    const onSubmit = (e: any) => {
        if (!name) {
            setError("Please enter your name")
            return
        }

        console.log(name)
        e.preventDefault()
        navigate("/locate/" + name)

    }


    return (
        <LocateStyled>
            <label>Enter you name </label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p className='red'>{error}</p>
            <button onClick={onSubmit}>Start Locating</button>
        </LocateStyled>
    )
}

export default Locate
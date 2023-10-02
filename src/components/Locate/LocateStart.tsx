import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGeolocation } from "@uidotdev/usehooks";
import { useParams, useNavigate } from 'react-router-dom';


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

    button {
        padding: 5px 10px;
        margin: 1rem;
        color: #e67e22;
    }

`


const LocateStart = () => {
    const INTERVAL = 2000;
    const state = useGeolocation();
    const navigate = useNavigate();
    const { name } = useParams();

    const stopMonitoring = () => {
        navigate(`/locate/`)
    }

    const sendData = () => {
        const data = { username: name, ...state };
        fetch("http://localhost:3001/api/v1/location/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("res", res);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };


    useEffect(() => {
        const sendDataInterval = setInterval(() => {
            console.log("state", state);
            sendData();
        }, INTERVAL)

        return () => {
            clearInterval(sendDataInterval);
        }
    }, [state]);

    return (
        <LocateStyled>
            <h1>Continiously monitoring your location and sending to server</h1>

            <article>
                <table>
                    <tbody>
                        <tr key={name}>
                            <th>Name</th>
                            <td>{name || "unknown"}</td>
                        </tr>
                        {Object.keys(state).map((key) => {
                            if (key === "loading") {
                                return null;
                            }
                            return (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{state[key] || "unknown"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </article>

            <button onClick={stopMonitoring}>Stop Monitoring</button>
        </LocateStyled>
    )
}

export default LocateStart
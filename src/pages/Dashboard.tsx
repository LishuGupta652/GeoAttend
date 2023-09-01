import React, { useEffect } from 'react'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Dashboard = () => {
    const { isUserDataLoading, isUserLoggedIn, userData } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserDataLoading && !isUserLoggedIn) {
            toast.error("You are not logged in");
            navigate("/login");
        }
    }, [isUserLoggedIn, isUserDataLoading])

    return (
        <div>{
            JSON.stringify(userData)
        }</div>
    )
}

export default Dashboard
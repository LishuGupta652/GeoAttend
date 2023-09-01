import { useEffect } from "react";
import { useMutation } from "react-query";
import { API_Response } from "../types/types";
import { getApiTest, signupUser } from '../utils/api';
import toast from 'react-hot-toast';
import Error from "../components/Error/Error";
const Signup = () => {
    const { mutate } = useMutation("signup_user", signupUser, {
        onSuccess: (data) => {
            console.log(data);
            toast("Signup Successfull")
        },
        onError: (error) => {
            toast.error(JSON.stringify(error || "signup error"));
        }
    })

    const addUser = () => {
        mutate({
            name: "test",
            email: "test@gmail.com",
            password: "test123"
        })
    }

    return (
        <>
            <button onClick={addUser}>Add User</button>

        </>
    )
}

export default Signup
import { useMutation } from "react-query";
import { loginUser, signupUser } from '../utils/api';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginValidation, signupValidation } from "../utils/helper";
import styled from "styled-components";
import { LOGIN_USER_TYPE, SIGNUP_USER_TYPE } from "../types/types";
import { useNavigate } from "react-router-dom";

const LoginStyled = styled.div`
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
        padding: 1rem;
        border-radius: 1rem;
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
`


const Login = () => {
    const navigate = useNavigate();
    const { mutate } = useMutation("login_user", loginUser, {
        onSuccess: (data) => {
            localStorage.setItem("auth_token", data?.user?.token || "")
            toast("Login successful")
            navigate("/dashboard")
        },
        onError: handleError
    })
    function handleError(error: any) {
        toast.error(error?.response?.data?.error || "Error Logging in");
    }
    return (
        <LoginStyled>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={loginValidation}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    await mutate(values as LOGIN_USER_TYPE);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" placeholder="enter your email" />
                        <ErrorMessage name="email" component="div" />
                        <br />
                        <Field type="password" name="password" placeholder="enter your password" />
                        <ErrorMessage name="password" component="div" />
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </LoginStyled>
    )
}

export default Login
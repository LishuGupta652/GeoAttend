import { useMutation } from "react-query";
import { signupUser } from '../utils/api';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signupValidation } from "../utils/helper";
import styled from "styled-components";
import { SIGNUP_USER_TYPE } from "../types/types";
import { useNavigate } from "react-router-dom";

const SignupStyled = styled.div`
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


const Signup = () => {
    const navigate = useNavigate();
    const { mutate } = useMutation("signup_user", signupUser, {
        onSuccess: () => {
            toast("Signup successful")
            navigate("/login")
        },
        onError: handleError
    })
    function handleError(error: any) {
        toast.error(error?.response?.data?.error || "Error Signing up");
    }
    return (
        <SignupStyled>
            <Formik
                initialValues={{ name: "", email: '', password: '' }}
                validate={signupValidation}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    await mutate(values as SIGNUP_USER_TYPE);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Enter your name" />
                        <ErrorMessage name="name" component="div" />
                        <br />
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

        </SignupStyled>
    )
}

export default Signup
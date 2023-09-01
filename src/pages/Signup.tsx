import { useEffect } from "react";
import { useMutation } from "react-query";
import { API_Response } from "../types/types";
import { getApiTest, signupUser } from '../utils/api';
import toast from 'react-hot-toast';
import Error from "../components/Error/Error";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup = () => {
    const { mutate } = useMutation("signup_user", signupUser, {
        onSuccess: () => {
            toast("Signup successful")
        },
        onError: handleError
    })

    function handleError(error: any) {
        toast.error(error?.response?.data?.error || "Error Signing up");
    }

    const addUser = () => {
        mutate({
            name: "test",
            email: "test@gmail.com",
            password: "test123"
        })
    }

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {} as any;
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password must be atleast 6 characters';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" placeholder="enter your email" />
                        <br />
                        <ErrorMessage name="email" component="div" />
                        <br />
                        <Field type="password" name="password" placeholder="enter your password" />
                        <br />
                        <ErrorMessage name="password" component="div" />
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default Signup
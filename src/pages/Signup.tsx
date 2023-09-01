import { useMutation } from "react-query";
import { signupUser } from '../utils/api';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signupValidation } from "../utils/helper";

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
                initialValues={{ name: "", email: '', password: '' }}
                validate={signupValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Enter your name" />
                        <ErrorMessage name="password" component="div" />
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

        </>
    )
}

export default Signup
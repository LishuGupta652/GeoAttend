import { THEME_TYPES } from './../types/types';

export const getInitialTheme = (): THEME_TYPES => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches) {
        return "dark";
    }

    return "light";
}


export const signupValidation = (values: any) => {
    const errors = {} as any;
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters';
    }

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 3) {
        errors.name = 'Name must be atleast 3 characters';
    }
    return errors;
}
export const loginValidation = (values: any) => {
    const errors = {} as any;
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters';
    }
    return errors;
}
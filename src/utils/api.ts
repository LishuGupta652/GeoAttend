import { API_Response, API_Response_Error } from './../types/types';
import { BASE_USER_API_URL, GET_API_TEST, API_SIGNUP, API_LOGIN } from './constants';
import axios from 'axios';

const userApiClient = axios.create({
    baseURL: BASE_USER_API_URL,
    headers: {
        "Content-type": "application/json",
    },
});

const apiRequest = async ({ ...options }) => {
    userApiClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('auth_token')}`;

    const onSuccess = (response: any) => response.data;
    const onError = (error: any) => {
        throw error;
    }

    return userApiClient(options).then(onSuccess).catch(onError);
}


export const getApiTest = async (): Promise<API_Response | API_Response_Error> => {
    return await apiRequest({
        url: GET_API_TEST,
        method: 'GET',
    });
}

export const signupUser = async (data: any): Promise<API_Response | API_Response_Error> => {
    return await apiRequest({
        url: API_SIGNUP,
        method: 'POST',
        data
    });
}
export const loginUser = async (data: any): Promise<API_Response | API_Response_Error> => {
    return await apiRequest({
        url: API_LOGIN,
        method: 'POST',
        data
    });
}
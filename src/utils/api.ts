import { GET_API_TEST } from './constants';
import axios from 'axios';

export const getApiTest = async () => {
    try {

        const response = await axios.get(GET_API_TEST);
        console.log(response.data)
        return response.data;

    } catch (error: any) {
        console.error(error);
        const errorMessage = error?.response.data.error || error?.message;
        return errorMessage;
    }
}
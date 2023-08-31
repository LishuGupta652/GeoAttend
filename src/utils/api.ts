import { GET_API_TEST } from './constants';

export const getApiTest = async () => {
    const res = await fetch(GET_API_TEST, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })

    return await res.json();
}
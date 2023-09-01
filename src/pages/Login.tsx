import { useQuery, useMutation } from "react-query";
import Loading from "../components/Loader/Loading";
import { API_Response } from "../types/types";
import { getApiTest } from '../utils/api';
import toast from 'react-hot-toast';
import Error from "../components/Error/Error";
const Login = () => {
    const { isLoading, data, error } = useQuery<API_Response>("apiTest", getApiTest, {
        enabled: false,
        retry: 1,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    })

    return (
        <>
            <Error>
                {JSON.stringify(data.data.message)}
            </Error>
        </>
    )
}

export default Login
import { useQuery } from "react-query";
import Loading from "../components/Loader/Loading";
import { API_Response } from "../types/types";
import { getApiTest } from '../utils/api';
import toast from 'react-hot-toast';
import Error from "../components/Error/Error";
const Test = () => {
    const { isLoading, data, error, isError, refetch } = useQuery<API_Response>("apiTest", getApiTest, {
        retry: 1,
        staleTime: 0,
        cacheTime: 5000,
        // refetchOnMount: true,
        refetchOnWindowFocus: false,
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,
        enabled: false,
        onError: (error) => {
            notify(error);
        },
        onSuccess: (data) => {
            toast(JSON.stringify(data || "sdf"));
        }
    })
    if (isLoading) {
        return <Loading />
    }

    const notify = (error: any) => toast(JSON.stringify(error));

    return (
        <>
            <button onClick={() => refetch()}>Refetch</button>
            <Error>
                {JSON.stringify(data || "")}
            </Error>
        </>
    )
}

export default Test
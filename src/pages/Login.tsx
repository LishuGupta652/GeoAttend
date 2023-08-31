import { useEffect, useState } from 'react'
import { getApiTest } from '../utils/api';
const Login = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await getApiTest();
            setData(data);
        }

        fetchData();

    }, [])
    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}

export default Login
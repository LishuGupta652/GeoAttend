import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { USER_TOKEN_TYPE } from '../types/types';



function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({} as USER_TOKEN_TYPE);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            try {
                const decodedToken = jwt_decode(token) as USER_TOKEN_TYPE;

                const currentTime = Date.now() / 1000; // Convert to seconds
                if (decodedToken?.exp > currentTime) {
                    setIsLoggedIn(true);
                    setUser(decodedToken);
                    setLoading(false);
                } else {
                    setIsLoggedIn(false);
                    setUser({} as USER_TOKEN_TYPE);
                    localStorage.removeItem('auth_token');
                    setLoading(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
                setUser({} as USER_TOKEN_TYPE);
                localStorage.removeItem('auth_token');
                setLoading(false);
            }
        } else {
            setIsLoggedIn(false);
            setUser({} as USER_TOKEN_TYPE);
            setLoading(false);
        }
    }, []);

    return { isUserLoggedIn: isLoggedIn, userData: user, isUserDataLoading: loading };
}

export default useAuth;
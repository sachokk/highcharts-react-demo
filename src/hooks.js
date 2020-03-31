import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    return Object.fromEntries(new URLSearchParams(useLocation().search));
}

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setData(json);
                setLoading(false)
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url, options]);
    return { data, error, loading };
};
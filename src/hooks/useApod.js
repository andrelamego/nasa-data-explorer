import {useEffect, useState} from "react";
import {nasaApi} from "../services/nasaApi";
import {getCache, setCache} from "../utils/cache.js";

export const useApod = (date = null) => {
    const cacheKey = `apod:${date || "today"}`;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApod = async (selectedDate) => {
        try {
            setLoading(true);
            setError(null);

            const cached =  getCache(cacheKey)
            if (cached) {
                setData(cached);
                setLoading(false);
                return;
            }

            const result = selectedDate
                ? await nasaApi.getApodByDate(selectedDate)
                : await nasaApi.getApodToday();

            setData(result);
            setCache(cacheKey, result)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApod(date);
    }, [date]);

    return { data, loading, error, refetch: fetchApod };
}
import {useEffect, useState} from "react";
import {nasaApi} from "../services/nasaApi";

export const useApod = (date = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApod = async (selectedDate) => {
        try {
            setLoading(true);
            setError(null);

            const result = selectedDate
                ? await nasaApi.getApodByDate(selectedDate)
                : await nasaApi.getApodToday();

            setData(result);
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
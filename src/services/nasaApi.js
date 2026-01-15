import axios from 'axios';

const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const nasaApi = {
    getApodByDate: async (date) => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    date
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data from NASA API: ' + error.message);
        }
    },

    getApodToday: async () => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data from NASA API: ' + error.message);
        }
    },

    getApodRange: async (startDate, endDate) => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    start_date: startDate,
                    end_date: endDate
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data from NASA API: ' + error.message);
        }
    }
};
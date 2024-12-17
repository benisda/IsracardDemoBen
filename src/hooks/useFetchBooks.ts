import { useQuery } from 'react-query';
import axios from 'axios';

const BOOKS_API_URL = 'https://potterapi-fedeperin.vercel.app/en/books';

export const useFetchBooks = () => {
    return useQuery(['books'], async () => {
        const response = await axios.get(BOOKS_API_URL);
        return response.data;
    }, {
        staleTime: 24 * 60 * 60 * 1000, // Cache data for 24 hours
        cacheTime: 24 * 60 * 60 * 1000,
    });
};

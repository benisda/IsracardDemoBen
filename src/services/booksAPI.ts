import axios from 'axios';

const API_URL = 'https://potterapi-fedeperin.vercel.app/en/books';

export const fetchBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

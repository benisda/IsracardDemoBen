import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    index: number;
    title: string;
    releaseDate: string;
    cover: string;
    description?: string;
    pages?: number;
}

interface BooksState {
    favorites: Book[];
}

const initialState: BooksState = {
    favorites: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<Book>) {
            state.favorites.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<Book>) {
            state.favorites = state.favorites.filter(
                (book) => book.title !== action.payload.title
            );
        },
    },
});

export const { addFavorite, removeFavorite } = booksSlice.actions;

export default booksSlice.reducer;

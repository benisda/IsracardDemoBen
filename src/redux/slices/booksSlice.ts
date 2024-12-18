import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types/Book';

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
                (book) => {
                    return book.index !== action.payload.index
                }
            );
        },
    },
});

export const { addFavorite, removeFavorite } = booksSlice.actions;

export default booksSlice.reducer;

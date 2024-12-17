import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import booksReducer from './slices/booksSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

const store = configureStore({
    reducer: {
        books: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],  // Ignore specific actions from redux-persist, it was causing me an error
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };

// This file is used to declare types for redux-persist library
declare module 'redux-persist/integration/react' {
    import { Persistor } from 'redux-persist';

    export const PersistGate: React.FC<{
        loading: React.ReactNode;
        persistor: Persistor;
    }>;
}

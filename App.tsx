import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

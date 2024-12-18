import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './src/navigation/Navigation';
import { SafeAreaView } from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Navigation />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

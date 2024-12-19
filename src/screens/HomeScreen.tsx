import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useFetchBooks } from '../hooks/useFetchBooks';
import BooksList from '../components/BooksList/BooksList';
import { DEFAULT_SIDES_PADDING } from '../consts';

const HomeScreen: React.FC = ({ navigation }: any) => {
  const { data: books, isLoading, isError } = useFetchBooks();
  const handlePressBook = useCallback((book: any) => {
    navigation.navigate('Details', { book });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Failed to load books.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BooksList books={books} onPressBook={handlePressBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: DEFAULT_SIDES_PADDING,
    paddingTop: DEFAULT_SIDES_PADDING
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default HomeScreen;

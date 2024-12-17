import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import BooksList from '../../components/BooksList';

const HomeScreen: React.FC = () => {
  const { data: books, isLoading, isError } = useFetchBooks();

  const handlePressBook = (book: any) => {
    console.log('Book pressed:', book); // Will navigate to the book details later
  };

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
    padding: 16,
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
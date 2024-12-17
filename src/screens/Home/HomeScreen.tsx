import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/slices/booksSlice';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const books = [
    { title: 'Book 1', releaseDate: '2024-01-01', cover: 'image_url' },
    { title: 'Book 2', releaseDate: '2024-01-02', cover: 'image_url' },
  ];

  const handleAddFavorite = (book: any) => {
    dispatch(addFavorite(book));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text>{item.title}</Text>
            <Button title="Add to Favorites" onPress={() => handleAddFavorite(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bookContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default HomeScreen;

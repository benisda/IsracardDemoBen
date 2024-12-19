import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList/BooksList';

const FavoritesScreen: React.FC = ({ navigation }: any) => {
    const handlePressBook = useCallback((book: any) => {
        navigation.navigate('Details', { book });
    }, []);

    const favorites = useSelector((state: any) => state.books.favorites);

    return (
        <View style={styles.container}>
            <BooksList books={favorites} onPressBook={handlePressBook} filterKeys={['title', 'description']} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    }
});

export default FavoritesScreen;

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/slices/booksSlice';

const FavoritesScreen: React.FC = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.books.favorites);

    const handleRemoveFavorite = (book: any) => {
        dispatch(removeFavorite(book));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites Screen</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={styles.bookContainer}>
                        <Text>{item.title}</Text>
                        <Button title="Remove from Favorites" onPress={() => handleRemoveFavorite(item)} />
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

export default FavoritesScreen;

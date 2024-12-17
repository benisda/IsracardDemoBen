import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addFavorite, removeFavorite } from '../../redux/slices/booksSlice';

type DetailsScreenRouteProp = RouteProp<{ Details: { book: any } }, 'Details'>;

const DetailsScreen: React.FC = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const { book } = route.params;

    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.books.favorites.some((fav) => fav.index === book.id)
    );

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(book.id));
        } else {
            dispatch(addFavorite(book));
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: book.cover }} style={styles.cover} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.releaseDate}>Release Date: {book.releaseDate}</Text>
            <Text style={styles.description}>{book.description}</Text>
            <Text style={styles.pages}>Pages: {book.pages}</Text>
            <Button
                title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                onPress={handleToggleFavorite}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    cover: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    releaseDate: {
        fontSize: 16,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        marginBottom: 16,
    },
    pages: {
        fontSize: 14,
        marginBottom: 16,
    },
});

export default DetailsScreen;

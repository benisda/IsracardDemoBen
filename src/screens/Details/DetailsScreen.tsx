import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addFavorite, removeFavorite } from '../../redux/slices/booksSlice';
import IconButton from '../../components/IconButton';
import ChevronLeftSvg from '../../assets/svg/ChevronLeftSvg';
import StarSvg from '../../assets/svg/StarSvg';

const DetailsScreen: React.FC = ({ navigation, route }: any) => {
    const { book } = route.params;

    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.books.favorites.some((fav) => fav.index === book.index)
    );

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(book));
        } else {
            dispatch(addFavorite(book));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <IconButton onPress={() => navigation.goBack(null)}>
                    <ChevronLeftSvg height={24} width={24} fill='#333' />
                </IconButton>
                <Image source={{ uri: book.cover }} style={styles.cover} />
                <IconButton onPress={handleToggleFavorite}>
                    <StarSvg height={24} width={24} fill={isFavorite ? '#FFD700' : '#333'} />
                </IconButton>
            </View>
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
    head: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    cover: {
        width: 150,
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

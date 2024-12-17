import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';

interface Book {
    index: number;
    title: string;
    releaseDate: string;
    cover: string;
}

interface BooksListProps {
    books: Book[];
    onPressBook: (book: Book) => void;
}

const BooksList: React.FC<BooksListProps> = ({ books, onPressBook }) => {
    console.log(books);
    return (
        <FlashList
            data={books}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => onPressBook(item)}>
                    <Image source={{ uri: item.cover }} style={styles.cover} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.releaseDate}>{item.releaseDate}</Text>
                    </View>
                </TouchableOpacity>
            )}
            estimatedItemSize={100}
            keyExtractor={(item) => item.index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3,
    },
    cover: {
        width: 80,
        height: 120,
        resizeMode: 'cover',
    },
    info: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    releaseDate: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default BooksList;
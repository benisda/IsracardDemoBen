import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import TextInput from './TextInput';
import { Book } from '../types/Book';

interface BooksListProps {
    books: Book[];
    onPressBook: (book: Book) => void;
    filterKeys?: string[];
}

const DEBOUNCE_TIME = 300;

const BooksList: React.FC<BooksListProps> = ({ books, onPressBook, filterKeys = ['title'] }) => {
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilteredBooks(books.filter((book) => {
                return filterKeys.some((key) => book[key as keyof Book].toString().toLowerCase().includes(search.toLowerCase()));
            }));
        }, DEBOUNCE_TIME);
        return () => clearTimeout(timeout);
    }, [search, books]);

    return (
        <View style={styles.container}>
            <TextInput value={search} onChangeText={setSearch} placeholder="Search books" />
            <FlashList
                data={filteredBooks}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
    },
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
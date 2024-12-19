import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Book } from '../types/Book'

type BookItemProps = {
    book: Book
    onPressBook: (book: Book) => void
}

const BookItem = ({ book, onPressBook }: BookItemProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPressBook(book)}>
            <Image source={{ uri: book.cover }} style={styles.cover} />
            <View style={styles.info}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.releaseDate}>{book.releaseDate}</Text>
            </View>
        </TouchableOpacity>
    )
}

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
})

export default BookItem
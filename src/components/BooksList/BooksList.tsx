import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import TextInput from '../TextInput';
import { Book } from '../../types/Book';
import BookItem from './BookItem';
import RadioLink from '../RadioLink/RadioLink';
import AlphabetFilterSvg from '../../assets/svg/AlphabetFilterSvg';
import CalendarSvg from '../../assets/svg/CalendarSvg';
import PagesSvg from '../../assets/svg/PagesSvg';

interface BooksListProps {
    books: Book[];
    onPressBook: (book: Book) => void;
    filterKeys?: string[];
}

const DEBOUNCE_TIME = 300;

const BooksList: React.FC<BooksListProps> = ({ books, onPressBook, filterKeys = ['title'] }) => {
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [sorting, setSorting] = useState('releaseDate');

    const sortingFunctionTranslator = {
        title: (a: Book, b: Book) => a.title.localeCompare(b.title),
        releaseDate: (a: Book, b: Book) => {
            const dateA = new Date(a.releaseDate).getTime();
            const dateB = new Date(b.releaseDate).getTime();
            return dateA - dateB;
        },
        pages: (a: Book, b: Book) => a.pages - b.pages,
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilteredBooks(books.filter((book) => {
                return filterKeys.some((key) => book[key as keyof Book].toString().toLowerCase().includes(search.toLowerCase()));
            }).sort(sortingFunctionTranslator[sorting as keyof typeof sortingFunctionTranslator]));
        }, DEBOUNCE_TIME);
        return () => clearTimeout(timeout);
    }, [search, books, sorting]);

    return (
        <View style={styles.container}>
            <TextInput value={search} onChangeText={setSearch} placeholder="Search books" />
            <View style={styles.filters}>
                <RadioLink options={[
                    { label: 'Title', value: 'title', icon: AlphabetFilterSvg },
                    { label: 'Release Date', value: 'releaseDate', icon: CalendarSvg },
                    { label: 'Pages', value: 'pages', icon: PagesSvg }
                ]} value={sorting} onChange={setSorting} />

                <RadioLink options={[
                    { label: 'Title', value: 'title', icon: AlphabetFilterSvg },
                    { label: 'Release Date', value: 'releaseDate', icon: CalendarSvg },
                    { label: 'Pages', value: 'pages', icon: PagesSvg }
                ]} value={sorting} onChange={setSorting} />
            </View>
            <FlashList
                data={filteredBooks}
                renderItem={({ item }) => (
                    <BookItem book={item} onPressBook={onPressBook} />
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
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default BooksList;
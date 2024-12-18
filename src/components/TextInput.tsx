import { View, TextInput as RNTextInput, StyleSheet } from 'react-native'
import React from 'react'

type TextInputProps = {
    value: string
    onChangeText: (text: string) => void
    placeholder?: string
}

const TextInput = ({ value, onChangeText, placeholder = 'Search' }: TextInputProps) => {
    return (
        <View style={styles.container}>
            <RNTextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEDEDE',
        borderRadius: 100000, // Large number to make it a pill shape
        padding: 10,
        paddingHorizontal: 25,
    },
    input: {
        width: '100%',
    },
})

export default TextInput
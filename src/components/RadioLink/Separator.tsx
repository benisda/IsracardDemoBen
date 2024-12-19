import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Separator = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: '#ccc',
    }
})

export default Separator
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type IconButtonProps = {
    onPress: () => void
    children: React.ReactNode
}

const IconButton = ({ onPress, children }: IconButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEDEDE',
        borderRadius: 100000, // Large number to make it a pill
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default IconButton
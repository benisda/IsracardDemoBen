import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Svg } from '../../assets/svg/Svg';
import { SPACE_BASIS } from '../../consts';

type RadioLinkOptionProps = {
    onPress: () => void,
    label: string,
    icon: React.FC<Svg>,
    selected: boolean,
}

const RadioLinkOption = ({ onPress, label, selected, icon }: RadioLinkOptionProps) => {
    const Icon = icon;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon height={24} width={24} fill={selected ? '#007bff' : '#999'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: SPACE_BASIS * 2
    },
})

export default RadioLinkOption
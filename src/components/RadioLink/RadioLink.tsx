import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import RadioLinkOption from './RadioLinkOption'
import { Svg } from '../../assets/svg/Svg'
import { SPACE_BASIS } from '../../consts'
import Separator from './Separator'

type RadioOption = {
    label: string
    value: string
    icon: React.FC<Svg>
}

type RadioLinkProps = {
    options: RadioOption[]
    value: string
    onChange: (value: string) => void
}

const RadioLink = ({ options, value, onChange }: RadioLinkProps) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <>
                    <RadioLinkOption
                        key={option.value}
                        label={option.label}
                        icon={option.icon}
                        selected={value === option.value}
                        onPress={() => onChange(option.value)}
                    />
                    {
                        index !== options.length - 1 && <Separator key={`separator-${option.value}`} />
                    }
                </>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: SPACE_BASIS,
    }
})

export default RadioLink
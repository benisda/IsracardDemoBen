import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Fragment } from 'react'
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
    onChange: (value: any) => void
}

const RadioLink = ({ options, value, onChange }: RadioLinkProps) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <Fragment key={option.value}>
                    <RadioLinkOption
                        label={option.label}
                        icon={option.icon}
                        selected={value === option.value}
                        onPress={() => onChange(option.value)}
                    />
                    {
                        index !== options.length - 1 && <Separator key={`separator-${option.value}`} />
                    }
                </Fragment>
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
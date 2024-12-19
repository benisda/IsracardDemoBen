import React from 'react'
import Svg, { Path } from 'react-native-svg';
import type { Svg as SvgType } from './Svg';
const LinesSvg = ({ fill = '#333', height = 28, width = 28 }: SvgType) => {
    return (
        <Svg fill={fill} height={height} width={width} viewBox="0 0 16 16">
            <Path d="M1 5H15V7H1V5Z" />
            <Path d="M1 9H15V11H1V9Z" />
            <Path d="M1 13H15V15H1V13Z" />
            <Path d="M1 1H15V3H1V1Z" />
        </Svg>
    )
}
export default LinesSvg
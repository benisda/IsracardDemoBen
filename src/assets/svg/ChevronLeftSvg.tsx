import React from 'react'
import Svg, { Path } from 'react-native-svg';
import type { Svg as SvgType } from './Svg.d';
const ChevronLeftSvg = ({ fill = '#333', height = 28, width = 28 }: SvgType) => {
    return (
        <Svg fill={fill} height={height} width={width} viewBox="0 0 18 16">
            <Path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </Svg>
    )
}
export default ChevronLeftSvg
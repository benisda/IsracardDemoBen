import React from 'react'
import Svg, { Path } from 'react-native-svg';
import type { Svg as SvgType } from './Svg.d';
const GridSvg = ({ fill = '#333', height = 28, width = 28 }: SvgType) => {
    return (
        <Svg fill={fill} height={height} width={width} viewBox="0 0 16 16">
            <Path fillRule="evenodd" clipRule="evenodd" d="M7 1H1V7H7V1ZM7 9H1V15H7V9ZM9 1H15V7H9V1ZM15 9H9V15H15V9Z" />
        </Svg>
    )
}
export default GridSvg
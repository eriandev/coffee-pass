import Svg, { Line, Path, Polyline, type SvgProps } from 'react-native-svg'

export const ExternalLinkIcon = ({ color = 'currentColor', width = 24, height = 24, strokeWidth = 2 }: SvgProps) => {
  return (
    <Svg
      fill="none"
      width={width}
      stroke={color}
      height={height}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></Path>
      <Polyline points="15 3 21 3 21 9"></Polyline>
      <Line x1="10" y1="14" x2="21" y2="3"></Line>
    </Svg>
  )
}

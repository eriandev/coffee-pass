import Svg, { Circle, Path, type SvgProps } from 'react-native-svg'

export const SearchIcon = ({ color, width = 24, height = 24 }: SvgProps) => {
  return (
    <Svg
      fill="none"
      width={width}
      stroke={color}
      height={height}
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx="11" cy="11" r="8" />
      <Path d="m21 21-4.3-4.3" />
    </Svg>
  )
}

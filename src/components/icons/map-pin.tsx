import Svg, { Circle, Path, type SvgProps } from 'react-native-svg'

export const MapPinIcon = ({ color = 'currentColor', width = 24, height = 24 }: SvgProps) => {
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
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <Circle cx="12" cy="10" r="3" />
    </Svg>
  )
}

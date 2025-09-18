import Svg, { Line, Path, Rect, type SvgProps } from 'react-native-svg'

export const InstagramIcon = ({ color = 'currentColor', width = 24, height = 24 }: SvgProps) => {
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
      <Rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <Path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <Line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </Svg>
  )
}

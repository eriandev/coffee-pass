import Svg, { Path, Rect, type SvgProps } from 'react-native-svg'

export const CopyIcon = ({ color = 'currentColor', width = 24, height = 24 }: SvgProps) => {
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
      <Rect x="9" y="9" width="13" height="13" rx="2" ry="2"></Rect>
      <Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </Svg>
  )
}

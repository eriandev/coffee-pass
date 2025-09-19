import Svg, { Line, type SvgProps } from 'react-native-svg'

export const PlusIcon = ({ color = 'currentColor', width = 24, height = 24 }: SvgProps) => {
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
      <Line x1="12" y1="5" x2="12" y2="19" />
      <Line x1="5" y1="12" x2="19" y2="12" />
    </Svg>
  )
}

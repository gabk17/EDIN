import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const MoreIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={44}
    fill="none"
  >
    <Circle cx={22.617} cy={22.039} r={21.897} fill="#fff" />
    <Circle cx={22.617} cy={22.039} r={21.397} stroke="#000" />
    <Circle cx={12.245} cy={22.039} r={2.305} fill="#000" />
    <Circle cx={22.617} cy={22.039} r={2.305} fill="#000" />
    <Circle cx={32.989} cy={22.039} r={2.305} fill="#000" />
  </Svg>
)

export default MoreIcon
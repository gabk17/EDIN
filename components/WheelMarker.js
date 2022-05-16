import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WheelMarker = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={64}
    fill="none"
    {...props}
  >
    <Path fill="#393B40" d="M22.084 63.75 0 0h44.167L22.084 63.75z" />
    <Path fill="#fff" d="M22 48 7 5h30L22 48z" />
  </Svg>
)

export default WheelMarker

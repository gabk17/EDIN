import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ForwardButton = ({ color }) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#a)" fill={color}>
      <Path d="M8.873 18a.748.748 0 0 1-.697-1.038.75.75 0 0 1 .164-.244l6.127-6.128a2.25 2.25 0 0 0 0-3.18L8.34 1.282A.753.753 0 1 1 9.405.217l6.128 6.128a3.751 3.751 0 0 1 0 5.31l-6.128 6.127a.75.75 0 0 1-.532.218Z" />
      <Path d="M1.373 18a.748.748 0 0 1-.697-1.038.75.75 0 0 1 .164-.244l7.193-7.185a.75.75 0 0 0 0-1.066L.84 1.282A.753.753 0 0 1 1.905.217L9.09 7.41a2.25 2.25 0 0 1 0 3.18l-7.185 7.192a.75.75 0 0 1-.532.218Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ForwardButton
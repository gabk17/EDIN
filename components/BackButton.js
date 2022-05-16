import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackButton = ({ color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={38}
    fill="none"

  >
    <Path
      fill={color}
      d="M22 2.379c0 .63-.295 1.235-.817 1.68L6.929 16.22a3.986 3.986 0 0 0-1.007 1.286c-.233.48-.353.996-.353 1.517 0 .52.12 1.036.353 1.516.234.481.576.918 1.007 1.286l14.235 12.146c.508.448.788 1.049.782 1.672-.006.623-.3 1.22-.816 1.66-.517.441-1.216.692-1.946.697-.73.005-1.435-.234-1.96-.667L2.989 25.197C1.075 23.56 0 21.343 0 19.03c0-2.311 1.075-4.529 2.989-6.165L17.242.697c.39-.333.886-.56 1.427-.651a3.234 3.234 0 0 1 1.61.135c.51.18.946.485 1.252.876.306.391.47.851.469 1.322z"
    />
  </Svg>
)


export default BackButton
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ActivityHeader = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={240}
    height={35}
    fill="none"
  >
    <Path
      fill="#393B40"
      d="m17.398 17.974-2.43-7.182c-.18-.456-.372-.99-.576-1.602a53.007 53.007 0 0 1-.612-2.016 29.12 29.12 0 0 1-1.152 3.654l-2.412 7.146h7.182zM27.064 28h-4.716c-.528 0-.954-.12-1.278-.36a2.413 2.413 0 0 1-.738-.954l-1.548-4.572H8.812l-1.548 4.572c-.132.336-.372.642-.72.918-.336.264-.756.396-1.26.396H.532L10.684 1.774h6.228L27.064 28zm14.644-14.238c-.168.204-.33.366-.486.486-.156.12-.378.18-.666.18-.276 0-.528-.066-.756-.198a25.318 25.318 0 0 0-.738-.432 5.24 5.24 0 0 0-.972-.45c-.372-.132-.834-.198-1.386-.198-.684 0-1.278.126-1.782.378-.492.252-.9.612-1.224 1.08-.324.468-.564 1.044-.72 1.728-.156.672-.234 1.434-.234 2.286 0 1.788.342 3.162 1.026 4.122.696.96 1.65 1.44 2.862 1.44.648 0 1.158-.078 1.53-.234.384-.168.708-.348.972-.54l.72-.558c.228-.168.51-.252.846-.252.444 0 .78.162 1.008.486l1.62 1.998a9.051 9.051 0 0 1-1.818 1.62 9.626 9.626 0 0 1-1.962.972 9.846 9.846 0 0 1-1.998.468 13.87 13.87 0 0 1-1.962.144 8.485 8.485 0 0 1-3.276-.648 8.182 8.182 0 0 1-2.736-1.872c-.78-.828-1.404-1.842-1.872-3.042-.456-1.2-.684-2.568-.684-4.104 0-1.344.198-2.598.594-3.762.408-1.176 1.002-2.19 1.782-3.042.792-.864 1.764-1.542 2.916-2.034 1.164-.492 2.508-.738 4.032-.738 1.464 0 2.748.234 3.852.702a9.243 9.243 0 0 1 2.988 2.052l-1.476 1.962zM65.678 28h-5.58V13.186h-7.813v9.27c0 .432.102.792.306 1.08.216.276.522.414.918.414.204 0 .372-.018.504-.054.144-.048.264-.096.36-.144.108-.06.204-.108.288-.144a.714.714 0 0 1 .324-.072c.168 0 .3.042.396.126.108.072.216.192.324.36l1.692 2.646c-.72.54-1.53.948-2.43 1.224a9.86 9.86 0 0 1-2.79.396c-.888 0-1.674-.126-2.358-.378a4.934 4.934 0 0 1-1.71-1.098 4.833 4.833 0 0 1-1.044-1.728c-.24-.672-.36-1.422-.36-2.25v-9.648h-1.584c-.288 0-.534-.09-.738-.27-.204-.192-.306-.468-.306-.828V9.91l2.97-.594 1.098-4.536c.144-.576.552-.864 1.224-.864h2.916V9.37h13.392V28zm.773-23.796c0 .444-.09.864-.27 1.26a3.37 3.37 0 0 1-.738 1.044 3.538 3.538 0 0 1-1.098.684 3.417 3.417 0 0 1-1.314.252c-.456 0-.882-.084-1.278-.252a3.661 3.661 0 0 1-1.062-.684c-.3-.3-.54-.648-.72-1.044a3.193 3.193 0 0 1-.252-1.26c0-.444.084-.864.252-1.26.18-.408.42-.756.72-1.044.312-.3.666-.534 1.062-.702.396-.18.822-.27 1.278-.27.468 0 .906.09 1.314.27.42.168.786.402 1.098.702.312.288.558.636.738 1.044.18.396.27.816.27 1.26zm20.716 5.13L79.931 28h-5.076L67.62 9.334h4.644c.396 0 .726.096.99.288.276.18.462.408.558.684l2.592 8.37c.228.684.426 1.35.594 1.998.18.648.336 1.296.468 1.944.264-1.296.63-2.61 1.098-3.942l2.7-8.37c.096-.276.276-.504.54-.684.264-.192.576-.288.936-.288h4.428zm7.527 0V28h-5.58V9.334h5.58zm.576-5.112c0 .444-.09.864-.27 1.26-.18.384-.426.726-.738 1.026a3.822 3.822 0 0 1-1.098.702 3.417 3.417 0 0 1-1.314.252c-.456 0-.882-.084-1.278-.252a3.985 3.985 0 0 1-1.062-.702c-.3-.3-.54-.642-.72-1.026a3.193 3.193 0 0 1-.252-1.26c0-.456.084-.882.252-1.278.18-.396.42-.744.72-1.044.312-.3.666-.534 1.062-.702A3.238 3.238 0 0 1 91.85.946c.468 0 .906.084 1.314.252A3.374 3.374 0 0 1 95 2.944c.18.396.27.822.27 1.278zm9.993 24.066c-.888 0-1.674-.126-2.358-.378a4.934 4.934 0 0 1-1.71-1.098 4.833 4.833 0 0 1-1.044-1.728c-.24-.672-.36-1.422-.36-2.25v-9.648h-1.584c-.288 0-.534-.09-.738-.27-.204-.192-.306-.468-.306-.828V9.91l2.97-.576 1.098-4.554c.144-.576.552-.864 1.224-.864h2.916V9.37h4.626v3.816h-4.626v9.27c0 .432.102.792.306 1.08.216.276.522.414.918.414.204 0 .372-.018.504-.054.144-.048.264-.096.36-.144.108-.06.204-.108.288-.144a.714.714 0 0 1 .324-.072c.168 0 .3.042.396.126.108.072.216.192.324.36l1.692 2.646c-.72.54-1.53.948-2.43 1.224a9.86 9.86 0 0 1-2.79.396zm24.869-18.954-9.972 23.508c-.168.372-.372.642-.612.81-.24.18-.624.27-1.152.27h-4.176l3.6-7.56-7.452-17.028h4.932c.432 0 .762.096.99.288.24.192.414.42.522.684l3.06 8.046c.288.732.522 1.482.702 2.25l.396-1.152c.132-.384.27-.762.414-1.134l2.772-8.01c.108-.276.3-.504.576-.684.276-.192.576-.288.9-.288h4.5zm27.383 11.88c.144 0 .288.03.432.09.144.048.282.138.414.27l2.412 2.538a10.074 10.074 0 0 1-3.978 3.132c-1.584.696-3.462 1.044-5.634 1.044-1.992 0-3.78-.336-5.364-1.008-1.572-.684-2.91-1.62-4.014-2.808-1.092-1.2-1.932-2.616-2.52-4.248-.588-1.644-.882-3.426-.882-5.346 0-1.956.318-3.75.954-5.382.636-1.644 1.53-3.06 2.682-4.248 1.152-1.188 2.532-2.112 4.14-2.772 1.608-.66 3.378-.99 5.31-.99.984 0 1.908.09 2.772.27.876.168 1.692.408 2.448.72a10.957 10.957 0 0 1 3.78 2.502l-2.052 2.754a2.877 2.877 0 0 1-.468.468c-.18.132-.432.198-.756.198a1.35 1.35 0 0 1-.612-.144 8.298 8.298 0 0 1-.612-.342 15.719 15.719 0 0 0-.72-.45 4.362 4.362 0 0 0-.918-.45 6.714 6.714 0 0 0-1.242-.36 8.336 8.336 0 0 0-1.656-.144c-1.008 0-1.932.186-2.772.558a6.083 6.083 0 0 0-2.16 1.638c-.6.708-1.068 1.584-1.404 2.628-.324 1.032-.486 2.214-.486 3.546 0 1.344.18 2.538.54 3.582.372 1.044.87 1.926 1.494 2.646a6.479 6.479 0 0 0 2.214 1.62c.84.372 1.74.558 2.7.558.552 0 1.056-.024 1.512-.072.456-.06.882-.15 1.278-.27a5.87 5.87 0 0 0 1.116-.504 7.567 7.567 0 0 0 1.062-.81c.144-.12.3-.216.468-.288.168-.084.342-.126.522-.126zm10.846-10.242a8.92 8.92 0 0 1 2.178-1.386c.792-.36 1.734-.54 2.826-.54 1.02 0 1.92.18 2.7.54.792.348 1.458.84 1.998 1.476.54.624.948 1.374 1.224 2.25.276.864.414 1.806.414 2.826V28h-5.58V16.138c0-.912-.21-1.62-.63-2.124-.42-.516-1.038-.774-1.854-.774-.612 0-1.188.132-1.728.396-.528.252-1.044.6-1.548 1.044V28h-5.58V1.054h5.58v9.918zm24.581 9.432c-1.116.048-2.034.144-2.754.288-.72.144-1.29.324-1.71.54-.42.216-.714.462-.882.738a1.798 1.798 0 0 0-.234.9c0 .636.174 1.086.522 1.35.348.252.858.378 1.53.378.72 0 1.35-.126 1.89-.378.54-.252 1.086-.66 1.638-1.224v-2.592zm-10.044-8.478a11.241 11.241 0 0 1 3.744-2.214c1.38-.492 2.856-.738 4.428-.738 1.128 0 2.142.186 3.042.558.912.36 1.68.87 2.304 1.53a6.528 6.528 0 0 1 1.458 2.322c.336.9.504 1.884.504 2.952V28h-2.556c-.528 0-.93-.072-1.206-.216-.264-.144-.486-.444-.666-.9l-.396-1.026c-.468.396-.918.744-1.35 1.044-.432.3-.882.558-1.35.774a6.406 6.406 0 0 1-1.476.45 8.46 8.46 0 0 1-1.728.162c-.852 0-1.626-.108-2.322-.324a5.041 5.041 0 0 1-1.782-.99 4.378 4.378 0 0 1-1.116-1.602c-.264-.648-.396-1.392-.396-2.232 0-.672.168-1.35.504-2.034.336-.696.918-1.326 1.746-1.89.828-.576 1.944-1.056 3.348-1.44 1.404-.384 3.174-.6 5.31-.648v-.792c0-1.092-.228-1.878-.684-2.358-.444-.492-1.08-.738-1.908-.738-.66 0-1.2.072-1.62.216-.42.144-.798.306-1.134.486-.324.18-.642.342-.954.486-.312.144-.684.216-1.116.216-.384 0-.708-.096-.972-.288a2.504 2.504 0 0 1-.648-.684l-1.008-1.746zm24.267.288c.576-1.008 1.236-1.8 1.98-2.376a4.163 4.163 0 0 1 2.592-.864c.84 0 1.524.198 2.052.594l-.36 4.104c-.06.264-.162.444-.306.54-.132.096-.318.144-.558.144-.096 0-.222-.006-.378-.018a89.273 89.273 0 0 0-.486-.036 6.97 6.97 0 0 0-.522-.054 3.323 3.323 0 0 0-.468-.036c-.816 0-1.47.216-1.962.648-.48.432-.888 1.032-1.224 1.8V28h-5.58V9.334h3.312c.276 0 .504.024.684.072.192.048.348.126.468.234a.813.813 0 0 1 .288.396c.072.168.132.372.18.612l.288 1.566zm15.204 16.074c-.888 0-1.674-.126-2.358-.378a4.934 4.934 0 0 1-1.71-1.098 4.833 4.833 0 0 1-1.044-1.728c-.24-.672-.36-1.422-.36-2.25v-9.648h-1.584c-.288 0-.534-.09-.738-.27-.204-.192-.306-.468-.306-.828V9.91l2.97-.576 1.098-4.554c.144-.576.552-.864 1.224-.864h2.916V9.37h4.626v3.816h-4.626v9.27c0 .432.102.792.306 1.08.216.276.522.414.918.414.204 0 .372-.018.504-.054.144-.048.264-.096.36-.144.108-.06.204-.108.288-.144a.714.714 0 0 1 .324-.072c.168 0 .3.042.396.126.108.072.216.192.324.36l1.692 2.646c-.72.54-1.53.948-2.43 1.224a9.86 9.86 0 0 1-2.79.396z"
    />
  </Svg>
)

export default ActivityHeader
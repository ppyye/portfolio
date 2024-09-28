import { extendTheme } from '@chakra-ui/react'
import '@fontsource/pretendard/100.css'
import '@fontsource/pretendard/200.css'
import '@fontsource/pretendard/300.css'
import '@fontsource/pretendard/400.css'
import '@fontsource/pretendard/500.css'
import '@fontsource/pretendard/600.css'
import '@fontsource/pretendard/700.css'
import '@fontsource/pretendard/800.css'
import '@fontsource/pretendard/900.css'
import '@fontsource/bagel-fat-one'

const theme = extendTheme({
    fonts: {
        heading: `'Pretendard', sans-serif`,
        body: `'Pretendard', sans-serif`,
    },
    colors: {
        gradients: {
            rainbow: "linear-gradient(90deg, red.500, orange.400, yellow.400, green.400, blue.400)",
            mint: "linear-gradient(#fff, #fff), linear-gradient(180deg, green.300, cyan.400)"
        },
    },
    styles: {
        global: {
            "body": {
                lineHeight: "1.6",
            },
        },
    },
})

export default theme

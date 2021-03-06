import { extendTheme } from '@chakra-ui/react'


const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  config
})

export default theme
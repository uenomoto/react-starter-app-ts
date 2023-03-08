import { extendTheme } from "@chakra-ui/react";

// グローバルなスタイル
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.200",
        color: "gray.800"
      }
    }
  }
})

export default theme;
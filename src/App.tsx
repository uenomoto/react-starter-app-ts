import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export const App = () => {
  return (
    // グローバルなスタイル呼び込み
    <ChakraProvider theme={theme}>
      <Button colorScheme="facebook">ボタン</Button>
    </ChakraProvider>
  );
};

export default App;

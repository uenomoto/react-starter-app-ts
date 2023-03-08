import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";

import { Router } from "./router/Router";
import theme from "./theme/theme";

// リアクトの最新バージョンでTS使う場合ルーティング設定はこのようになる↓
const App: React.FC = () => {
  const browserRouterProps: BrowserRouterProps = {};
  return (
    // グローバルなスタイル呼び込み
    <ChakraProvider theme={theme}>
      <BrowserRouter {...browserRouterProps}>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

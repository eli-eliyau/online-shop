import React from "react";
import Routes from "./routes";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export const theme = createTheme({
  direction: "ltr",
});
export const API_SERVER = "http://localhost:4000/api";
function App() {
  return (
    <RecoilRoot>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
// e63946
// f1faee
// a8dadc
// 457b9d
// 1d3557
export default App;

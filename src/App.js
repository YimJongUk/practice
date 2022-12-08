import { CssBaseline, ThemeProvider } from "@mui/material";

import React from "react";
import RouterSample from "./routes";
import appTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterSample />
    </ThemeProvider>
  );
}

export default App;

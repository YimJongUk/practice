import createTheme from "@mui/material/styles/createTheme";
//const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

// interface PaletteOptions {
//   primary?: PaletteColorOptions;
//   secondary?: PaletteColorOptions;
//   error?: PaletteColorOptions;
//   warning?: PaletteColorOptions;
//   info?: PaletteColorOptions;
//   success?: PaletteColorOptions;
//   mode?: PaletteMode;
//   tonalOffset?: PaletteTonalOffset;
//   contrastThreshold?: number;
//   common?: Partial<CommonColors>;
//   grey?: ColorPartial;
//   text?: Partial<TypeText>;
//   divider?: string;
//   action?: Partial<TypeAction>;
//   background?: Partial<TypeBackground>;
//   getContrastText?: (background: string) => string;
// }

const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d87274",
      light: "#ffa2a3",
      dark: "#a34449",
    },
  },
});

export default appTheme;

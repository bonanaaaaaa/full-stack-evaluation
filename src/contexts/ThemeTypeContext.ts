import { createContext } from "react";
import { PaletteType } from "@material-ui/core";

const ThemeTypeContext = createContext({
  themeType: "light" as PaletteType,
  toggleThemeType: () => {},
});

export default ThemeTypeContext;

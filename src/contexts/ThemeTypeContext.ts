import { useMediaQuery, createMuiTheme, PaletteType } from "@material-ui/core";
import React, { useState, useMemo, useContext } from "react";

const ThemeTypeContext = React.createContext({
  themeType: 'light' as PaletteType,
  toggleThemeType: () => {}
})

export default ThemeTypeContext
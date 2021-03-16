import { createContext } from 'react';
import type { PaletteType } from '@material-ui/core';

const ThemeTypeContext = createContext({
  themeType: 'light' as PaletteType,
  toggleThemeType: () => {},
});

export default ThemeTypeContext;

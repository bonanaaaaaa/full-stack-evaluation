import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createMuiTheme, useMediaQuery, CssBaseline, PaletteType } from '@material-ui/core'

import App from './App';
import { client } from './graphql'
import reportWebVitals from './reportWebVitals';
import ThemeTypeContext from './contexts/ThemeTypeContext';

function Root() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [themeType, setThemeType] = useState<PaletteType>('light')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeType,
        },
      }),
    [themeType],
  );

  React.useMemo(() => {
    setThemeType(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  function toggleThemeType() {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <ThemeTypeContext.Provider value={{ themeType, toggleThemeType }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </ThemeProvider>
      </ThemeTypeContext.Provider>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

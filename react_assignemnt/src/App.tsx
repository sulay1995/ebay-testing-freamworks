import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import MainRouter from './Routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#224DFF',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;

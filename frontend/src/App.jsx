import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </>
    );
};

export default App;

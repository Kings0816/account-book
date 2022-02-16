import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';

const App = () => {
    return (
        <RecoilRoot>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Router />
                </Suspense>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default App;

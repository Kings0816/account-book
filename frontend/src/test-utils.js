import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

const AllTheProviders = ({ children }) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

const customRender = (ui, options) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };

import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import theme from '../../styles/theme';
import Header from '.';

import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({ children }) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <BrowserRouter>{children}</BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

const customRender = (ui, options) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

describe('공통 헤더 컴포넌트 테스트', () => {
    it('이전 달, 다음 달로 이동할 수 있는 Arrow 버튼이 2개 표시된다.', () => {
        const element = customRender(<Header current="main" />);
        expect(element).toMatchSnapshot();

        const arrowButtons = screen.getAllByRole('button', { name: /change-month/i });
        expect(arrowButtons).toHaveLength(2);
    });
});

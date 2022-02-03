import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
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
        customRender(<Header current="main" />);

        const arrowButtons = screen.getAllByRole('button', { name: /month/i });

        expect(arrowButtons).toHaveLength(2);
    });

    it('초기 렌더링 시 날짜는 현재 날짜의 년, 월이 표시된다.', () => {
        customRender(<Header current="main" />);

        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const dateStrong = screen.getByTestId('date');

        expect(dateStrong).toHaveTextContent(`${year}년 ${month}월`);
    });

    it('내역, 달력, 통계로 이동할 수 있는 Link 요소가 3개 표시된다.', () => {
        customRender(<Header current="main" />);

        const arrowButtons = screen.getAllByRole('link');

        expect(arrowButtons).toHaveLength(3);
    });

    it('이전 달로 이동하는 Arrow 버튼 클릭 시 날짜는 이전 달로 표시된다.', () => {
        customRender(<Header current="main" />);

        const dateStrong = screen.getByTestId('date');
        const [year, month] = dateStrong.textContent.split(/[^0-9]+/g);

        const prevButton = screen.getByRole('button', { name: 'prev-month' });
        fireEvent.click(prevButton);

        const [changedYear, changedMonth] = dateStrong.textContent.split(/[^0-9]+/g);

        expect(new Date(changedYear, changedMonth)).toEqual(new Date(year, parseInt(month) - 1));
    });

    it('다음 달로 이동하는 Arrow 버튼 클릭 시 날짜는 다음 달로 표시된다.', () => {
        customRender(<Header current="main" />);

        const dateStrong = screen.getByTestId('date');
        const [year, month] = dateStrong.textContent.split(/[^0-9]+/g);

        const nextButton = screen.getByRole('button', { name: 'next-month' });
        fireEvent.click(nextButton);

        const [changedYear, changedMonth] = dateStrong.textContent.split(/[^0-9]+/g);

        expect(new Date(changedYear, changedMonth)).toEqual(new Date(year, parseInt(month) + 1));
    });

    // TODO 각 페이지(3개)로 이동하는 라우터 테스트 작성하기
});

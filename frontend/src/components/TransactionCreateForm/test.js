import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen, fireEvent } from '../../test-utils';

import TransactionCreateForm from '.';
import { categoryState } from '../../recoil/category/atom';

const TEST_DATA = {
    category: '식비',
    content: '치킨',
    method: '토스',
    cost: '20000',
    date: '2022-02-11',
    sign: '+',
};

const TEST_CATEGORY_DATA = [
    { id: 1, name: '미분류', color: '#817DCE', sign: 'all' },
    { id: 2, name: '카페/간식', color: '#D092E2', sign: '-' },
    { id: 4, name: '용돈', color: '#E6D267', sign: '+' },
    { id: 5, name: '교통', color: '#94D3CC', sign: '-' },
    { id: 10, name: '월급', color: '#B9D58C', sign: '+' },
    { id: 13, name: '식비', color: '#4CA1DE', sign: '-' },
    { id: 14, name: '여행/숙박', color: '#E2B765', sign: '-' },
];

describe('TransactionCreateForm 테스트', () => {
    const initializeState = ({ set }) => {
        set(categoryState, TEST_CATEGORY_DATA);
    };

    it('기본 요소들이 표시된다.', () => {
        render(<TransactionCreateForm transaction={TEST_DATA} onCreate={null} onCancle={null} />);

        const backButton = screen.getByRole('button', { name: 'back' });
        const incomeButton = screen.getByRole('button', { name: 'income' });
        const expenditureButton = screen.getByRole('button', { name: 'expenditure' });
        const dateInput = screen.getByLabelText('날짜');
        const categoryInput = screen.getByLabelText('카테고리');
        const contentInput = screen.getByLabelText('내용');
        const methodInput = screen.getByLabelText('결제수단');
        const costInput = screen.getByLabelText('금액');
        const createButton = screen.getByRole('button', { name: '추가' });

        expect(backButton).toBeInTheDocument();
        expect(incomeButton).toBeInTheDocument();
        expect(expenditureButton).toBeInTheDocument();
        expect(dateInput.value).toEqual(TEST_DATA['date']);
        expect(categoryInput.value).toEqual(TEST_DATA['category']);
        expect(contentInput.value).toEqual(TEST_DATA['content']);
        expect(methodInput.value).toEqual(TEST_DATA['method']);
        expect(costInput.value).toEqual(TEST_DATA['cost']);
        expect(createButton).toBeInTheDocument();
    });

    it('뒤로가기 버튼을 누르면 onCancle 함수가 호출된다.', () => {
        const onCancle = jest.fn();
        render(
            <TransactionCreateForm transaction={TEST_DATA} onCreate={null} onCancle={onCancle} />,
        );

        const backButton = screen.getByRole('button', { name: 'back' });
        fireEvent.click(backButton);
        expect(onCancle).toHaveBeenCalled();
    });

    it('추가 버튼을 누르면 form 데이터를 기반으로 onCreate 함수가 호출된다.', () => {
        const onCreate = jest.fn();
        render(
            <TransactionCreateForm transaction={TEST_DATA} onCreate={onCreate} onCancle={null} />,
        );

        const createButton = screen.getByRole('button', { name: '추가' });
        fireEvent.click(createButton);
        expect(onCreate).toHaveBeenCalledWith(TEST_DATA);
    });

    it('카테고리 input을 누르면 카테고리 Dropdown이 표시된다.', () => {
        render(<TransactionCreateForm transaction={TEST_DATA} onCreate={null} onCancle={null} />);
        const categoryDropdown = screen.queryByRole('list', { name: 'category' });
        expect(categoryDropdown).not.toBeInTheDocument();

        const categoryInput = screen.getByLabelText('카테고리');
        fireEvent.click(categoryInput);

        const visibleCategoryDropdown = screen.getByRole('list', { name: 'category' });
        expect(visibleCategoryDropdown).toBeInTheDocument();
    });

    it('결제수단 input을 누르면 결제수단 Dropdown이 표시된다.', () => {
        render(<TransactionCreateForm transaction={TEST_DATA} onCreate={null} onCancle={null} />);
        const methodDropdown = screen.queryByRole('list', { name: 'method' });
        expect(methodDropdown).not.toBeInTheDocument();

        const methodInput = screen.getByLabelText('결제수단');
        fireEvent.click(methodInput);

        const visibleMethodDropdown = screen.getByRole('list', { name: 'method' });
        expect(visibleMethodDropdown).toBeInTheDocument();
    });

    it('수입 버튼에 클릭되어 있는 경우, 카테고리 input을 누르면 수입에 해당하는 카테고리들이 표시된다.', () => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <TransactionCreateForm transaction={TEST_DATA} onCreate={null} onCancle={null} />
            </RecoilRoot>,
        );

        const categoryInput = screen.getByLabelText('카테고리');
        fireEvent.click(categoryInput);

        const datas = ['용돈', '월급'];
        datas.forEach((data) => {
            expect(screen.getByText(data)).toBeInTheDocument();
        });
    });

    it('지출 버튼에 클릭되어 있는 경우, 카테고리 input을 누르면 지출에 해당하는 카테고리들이 표시된다.', () => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <TransactionCreateForm
                    transaction={{ ...TEST_DATA, sign: '-' }}
                    onCreate={null}
                    onCancle={null}
                />
            </RecoilRoot>,
        );

        const categoryInput = screen.getByLabelText('카테고리');
        fireEvent.click(categoryInput);

        const datas = ['카페/간식', '교통', '식비', '여행/숙박'];
        datas.forEach((data) => {
            expect(screen.getByText(data)).toBeInTheDocument();
        });
    });
});

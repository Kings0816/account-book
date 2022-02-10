import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';

import TransactionCreateForm from '.';

const TEST_DATA = {
    category: '',
    content: '',
    method: '',
    cost: '',
    date: '',
    sign: '+',
};

describe('TransactionCreateForm 테스트', () => {
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
});

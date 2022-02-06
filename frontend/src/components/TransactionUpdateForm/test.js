import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';

import TransactionUpdateForm from '.';

const TEST_DATA = {
    category: '카페/간식',
    content: '녹차 스무디',
    method: '현금',
    cost: '5700',
    date: '2022-01-28',
    sign: '-',
};

describe('TransactionUpateForm 테스트', () => {
    it('기본 요소들이 표시된다.', () => {
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={null}
                onDelete={null}
                onCancle={null}
            />,
        );

        const backButton = screen.getByRole('button', { name: 'back' });
        const incomeButton = screen.getByRole('button', { name: 'income' });
        const expenditureButton = screen.getByRole('button', { name: 'expenditure' });
        const dateInput = screen.getByLabelText('날짜');
        const categoryInput = screen.getByLabelText('카테고리');
        const contentInput = screen.getByLabelText('내용');
        const methodInput = screen.getByLabelText('결제수단');
        const costInput = screen.getByLabelText('금액');
        const deleteButton = screen.getByRole('button', { name: '삭제' });
        const updateButton = screen.getByRole('button', { name: '수정' });

        expect(backButton).toBeInTheDocument();
        expect(incomeButton).toBeInTheDocument();
        expect(expenditureButton).toBeInTheDocument();
        expect(dateInput.value).toEqual(TEST_DATA['date']);
        expect(categoryInput.value).toEqual(TEST_DATA['category']);
        expect(contentInput.value).toEqual(TEST_DATA['content']);
        expect(methodInput.value).toEqual(TEST_DATA['method']);
        expect(costInput.value).toEqual(TEST_DATA['cost']);
        expect(deleteButton).toBeInTheDocument();
        expect(updateButton).toBeInTheDocument();
    });

    it('뒤로가기 버튼을 누르면 onCancle 함수가 호출된다.', () => {
        const onCancle = jest.fn();
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={null}
                onDelete={null}
                onCancle={onCancle}
            />,
        );

        const backButton = screen.getByRole('button', { name: 'back' });
        fireEvent.click(backButton);
        expect(onCancle).toHaveBeenCalled();
    });

    it('삭제 버튼을 누르면 onDelete 함수가 호출된다.', () => {
        const onDelete = jest.fn();
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={null}
                onDelete={onDelete}
                onCancle={null}
            />,
        );

        const deleteButton = screen.getByRole('button', { name: '삭제' });
        fireEvent.click(deleteButton);
        expect(onDelete).toHaveBeenCalled();
    });

    it('수정 버튼을 누르면 form 데이터를 기반으로 onUpdate 함수가 호출된다.', () => {
        const onUpdate = jest.fn();
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={onUpdate}
                onDelete={null}
                onCancle={null}
            />,
        );

        const updateButton = screen.getByRole('button', { name: '수정' });
        fireEvent.click(updateButton);
        expect(onUpdate).toHaveBeenCalledWith(TEST_DATA);
    });
});

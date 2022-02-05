import React from 'react';
import { render, screen } from '../../test-utils';

import TransactionUpdateForm from '.';

const TEST_DATA = {
    category: '카페/간식',
    color: '#D092E2',
    content: '녹차 스무디',
    method: '현금',
    sign: '-',
    cost: '5700',
    date: '2022-01-28',
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
        const dateInput = screen.getByLabelText('날짜');
        const categoryInput = screen.getByLabelText('카테고리');
        const contentInput = screen.getByLabelText('내용');
        const methodInput = screen.getByLabelText('결제수단');
        const costInput = screen.getByLabelText('금액');
        const deleteButton = screen.getByRole('button', { name: '삭제' });
        const updateButton = screen.getByRole('button', { name: '수정' });

        expect(backButton).toBeInTheDocument();
        expect(dateInput.value).toEqual(TEST_DATA['date']);
        expect(categoryInput.value).toEqual(TEST_DATA['category']);
        expect(contentInput.value).toEqual(TEST_DATA['content']);
        expect(methodInput.value).toEqual(TEST_DATA['method']);
        expect(costInput.value).toEqual(TEST_DATA['cost']);
        expect(deleteButton).toBeInTheDocument();
        expect(updateButton).toBeInTheDocument();
    });
});

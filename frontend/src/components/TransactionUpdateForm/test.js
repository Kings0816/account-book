import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen, fireEvent } from '../../test-utils';

import TransactionUpdateForm from '.';
import { categoryState } from '../../recoil/category/atom';

const TEST_DATA = {
    category: '카페/간식',
    content: '녹차 스무디',
    method: '현금',
    cost: '5700',
    date: '2022-01-28',
    sign: '-',
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

describe('TransactionUpateForm 테스트', () => {
    const initializeState = ({ set }) => {
        set(categoryState, TEST_CATEGORY_DATA);
    };

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

    it('카테고리 input을 누르면 카테고리 Dropdown이 표시된다.', () => {
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={null}
                onDelete={null}
                onCancle={null}
            />,
        );
        const categoryDropdown = screen.queryByRole('list', { name: 'category' });
        expect(categoryDropdown).not.toBeInTheDocument();

        const categoryInput = screen.getByLabelText('카테고리');
        fireEvent.click(categoryInput);

        const visibleCategoryDropdown = screen.getByRole('list', { name: 'category' });
        expect(visibleCategoryDropdown).toBeInTheDocument();
    });

    it('결제수단 input을 누르면 결제수단 Dropdown이 표시된다.', () => {
        render(
            <TransactionUpdateForm
                transaction={TEST_DATA}
                onUpdate={null}
                onDelete={null}
                onCancle={null}
            />,
        );
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
                <TransactionUpdateForm
                    transaction={{ ...TEST_DATA, sign: '+' }}
                    onUpdate={null}
                    onDelete={null}
                    onCancle={null}
                />
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
                <TransactionUpdateForm
                    transaction={TEST_DATA}
                    onUpdate={null}
                    onDelete={null}
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

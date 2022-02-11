import React from 'react';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import Dropdown from '.';

const TEST_DATA = [
    { id: 1, name: '일상/생활', color: '#817DCE', sign: '-' },
    { id: 2, name: '식비', color: '#817DCE', sign: '-' },
    { id: 3, name: '카페', color: '#817DCE', sign: '-' },
    { id: 4, name: '교통', color: '#817DCE', sign: '-' },
];

describe('TransactionUpateForm 테스트', () => {
    it('배경 dim과 item 들을 정상적으로 표시한다.', () => {
        render(<Dropdown data={TEST_DATA} active={true} />);

        const BackgroundDim = screen.getByTestId('dropdown-dim');
        const items = screen.getAllByRole('listitem');

        expect(BackgroundDim).toBeInTheDocument();
        expect(items).toHaveLength(TEST_DATA.length);
        items.forEach((item, index) => {
            expect(item).toHaveTextContent(TEST_DATA[index].name);
        });
    });

    it('props에 deleteHandler가 있는 경우에 삭제이미지가 item 개수만큼 표시한다.', () => {
        render(<Dropdown data={TEST_DATA} active={true} />);
        const notExistedDeleteImg = screen.queryAllByAltText('delete');
        expect(notExistedDeleteImg).toHaveLength(0);

        const deleteHandler = jest.fn();
        render(<Dropdown data={TEST_DATA} active={true} deleteHandler={deleteHandler} />);
        const deleteImg = screen.getAllByAltText('delete');
        expect(deleteImg).toHaveLength(TEST_DATA.length);
    });

    it('props에 createHandler 있는 경우에 추가하기 버튼이 표시한다.', () => {
        render(<Dropdown data={TEST_DATA} active={true} />);
        const notExistedAddButton = screen.queryByRole('button');
        expect(notExistedAddButton).not.toBeInTheDocument();

        const createHandler = jest.fn();
        render(<Dropdown data={TEST_DATA} active={true} createHandler={createHandler} />);
        const addButton = screen.getByRole('button');
        expect(addButton).toBeInTheDocument();
    });
});

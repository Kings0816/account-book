import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { renderHook, act } from '@testing-library/react-hooks';

import CategoryForm from '.';
import { useColor } from './hooks';

const DEFAULT_DATA = {
    name: '',
    color: '#817DCE',
    sign: '+',
};

describe('CategoryForm 테스트', () => {
    it('기본 요소들이 표시된다.', () => {
        render(<CategoryForm active={true} category={null} onCreate={null} onCancle={null} />);

        const incomeButton = screen.getByRole('button', { name: 'income' });
        const expenditureButton = screen.getByRole('button', { name: 'expenditure' });
        const categoryInput = screen.getByLabelText('카테고리명');
        const refreshButton = screen.getByRole('button', { name: 'refresh' });
        const colorInput = screen.getByLabelText('색상');
        const cancleButton = screen.getByRole('button', { name: '취소' });
        const createButton = screen.getByRole('button', { name: '추가' });

        expect(incomeButton).toBeInTheDocument();
        expect(expenditureButton).toBeInTheDocument();
        expect(categoryInput).toBeInTheDocument();
        expect(refreshButton).toBeInTheDocument();
        expect(colorInput).toBeInTheDocument();
        expect(cancleButton).toBeInTheDocument();
        expect(createButton).toBeInTheDocument();
    });

    it('취소 버튼을 누르면 onCancle 함수가 호출된다.', () => {
        const onCancle = jest.fn();
        render(<CategoryForm active={true} category={null} onCreate={null} onCancle={onCancle} />);

        const cancleButton = screen.getByRole('button', { name: '취소' });
        fireEvent.click(cancleButton);
        expect(onCancle).toHaveBeenCalled();
    });

    it('추가 버튼을 누르면 form 데이터를 기반으로 onCreate 함수가 호출된다.', () => {
        const onCreate = jest.fn();
        render(<CategoryForm active={true} category={null} onCreate={onCreate} onCancle={null} />);

        const categoryInput = screen.getByLabelText('카테고리명');
        fireEvent.change(categoryInput, { target: { value: '테스트' } });
        DEFAULT_DATA.name = '테스트';

        const createButton = screen.getByRole('button', { name: '추가' });
        fireEvent.click(createButton);
        expect(onCreate).toHaveBeenCalledWith(DEFAULT_DATA);
    });

    it('useColor - 색깔 변경 이벤트 발생 시 다음 색상을 반환한다.', () => {
        const { result } = renderHook(() => useColor());
        expect(result.current.currentColor).toEqual(0);

        act(() => {
            result.current.changeColor();
        });

        expect(result.current.currentColor).toEqual(1);
    });
});

import React from 'react';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import Transaction from '.';

const TEST_DATA = {
    category: '카페/간식',
    color: '#D092E2',
    content: '녹차 스무디',
    method: '현금',
    sign: '-',
    cost: '5700',
    date: '2022-01-28',
};

describe('Transaction컴포넌트 테스트', () => {
    it('트랜잭션 정보가 정상적으로 표시된다.', () => {
        const shapedCost = `${TEST_DATA['sign']}${TEST_DATA['cost']}`;
        render(<Transaction transaction={TEST_DATA} />);

        const categorySpan = screen.getByTestId('category');
        const contentSpan = screen.getByTestId('content');
        const methodSpan = screen.getByTestId('method');
        const costSpan = screen.getByTestId('cost');
        expect(categorySpan).toHaveTextContent(TEST_DATA['category']);
        expect(contentSpan).toHaveTextContent(TEST_DATA['content']);
        expect(methodSpan).toHaveTextContent(TEST_DATA['method']);
        expect(costSpan).toHaveTextContent(parseInt(shapedCost).toLocaleString('ko-KR'));
    });
});

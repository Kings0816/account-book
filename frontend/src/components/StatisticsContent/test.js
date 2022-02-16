import React from 'react';
import { render, screen } from '../../test-utils';

import StatisticsContent from '.';

const [CATEGORY_INDEX, COST_INDEX] = [0, 1];
const TEST_DATA = new Map();
TEST_DATA.set(
    { id: 1, name: '식비', color: '#4CA1DE', sign: '-' },
    { percent: 82, expenditureInCategory: 42000 },
);
TEST_DATA.set(
    { id: 2, name: '카페/간식', color: '#D092E2', sign: '-' },
    { percent: 18, expenditureInCategory: 9400 },
);

describe('카테고리 별 지출 내역의 비율과 금액을 표시하는 StatisticsContent 컴포넌트 테스트', () => {
    it('카테고리 별 이름, 지출 내역의 비율과 금액을 표시한다.', () => {
        render(<StatisticsContent transactionsByCategory={TEST_DATA} />);
        const categories = screen.getAllByRole('listitem');
        expect(categories).toHaveLength(2);

        Array.from(TEST_DATA.entries()).map((data, index) => {
            const { name } = data[CATEGORY_INDEX];
            const { percent, expenditureInCategory } = data[COST_INDEX];
            expect(categories[index]).toHaveTextContent(name);
            expect(categories[index]).toHaveTextContent(percent);
            expect(categories[index]).toHaveTextContent(
                parseInt(expenditureInCategory).toLocaleString(),
            );
        });
    });
});

import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import Header from '../../components/Header';
import { useTransactionSummary } from '../../hooks/useTransactionSummary';
import { filteredCategoryState } from '../../recoil/category/selector';
import { calculateExpenditure } from '../../utils/common/calculate-cost';
import { MainWrapper, DonutCircle } from './style';

const CATEGORY_INDEX = 0;
const COST_INDEX = 1;

const Statistics = () => {
    const categories = useRecoilValue(filteredCategoryState);
    const { transactions, monthExpenditure } = useTransactionSummary();

    const transactionsByCategory = new Map();
    categories.forEach((category) => {
        const transactionsInCategory = transactions.filter(
            (transaction) => transaction.category === category.name,
        );
        const expenditureInCategory = calculateExpenditure(transactionsInCategory);
        const percent = (expenditureInCategory / monthExpenditure) * 100;
        transactionsByCategory.set(category, { percent, expenditureInCategory });
    });

    const [cx, cy, r, width, startAngle] = [50, 50, 30, 15, -90];
    const dashArray = 2 * Math.PI * r;
    const animationDuration = 1000;
    let accumulatePercent = 0;
    const circles = Array.from(transactionsByCategory.entries())
        .sort((a, b) => b[COST_INDEX].percent - a[COST_INDEX].percent)
        .map((percentWithCategory) => {
            const color = percentWithCategory[CATEGORY_INDEX].color;
            const percent = percentWithCategory[COST_INDEX].percent;

            const dashOffset = dashArray - (dashArray * percent) / 100;
            const angle = (accumulatePercent * 360) / 100 + startAngle;
            const currentDuration = (animationDuration * percent) / 100;
            const delay = (animationDuration * accumulatePercent) / 100;
            accumulatePercent += percent;
            return (
                <DonutCircle
                    key={nanoid()}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={'transparent'}
                    color={color}
                    width={width}
                    dashArray={dashArray}
                    dashOffset={dashOffset}
                    angle={angle}
                    currentDuration={currentDuration}
                    delay={delay}
                />
            );
        });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'statistics'} />
            <MainWrapper>
                <svg viewBox="0 0 100 100">{circles}</svg>
            </MainWrapper>
        </Suspense>
    );
};

export default Statistics;

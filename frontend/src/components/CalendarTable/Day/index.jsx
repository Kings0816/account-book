import React from 'react';

import { calculateIncome, calculateExpenditure } from '../../../utils/common/calculate-cost';
import { Wrapper, CostBox, ElementInDay } from './style';

const Day = ({ day, transactions }) => {
    const dailyIncome = transactions ? calculateIncome(transactions) : 0;
    const dailyExpenditure = transactions ? calculateExpenditure(transactions) : 0;
    const total = dailyIncome - dailyExpenditure;

    return (
        <Wrapper>
            <CostBox>
                {dailyIncome !== 0 ? (
                    <ElementInDay color="blue" size={String(dailyIncome).length}>
                        {parseInt(dailyIncome).toLocaleString()}
                    </ElementInDay>
                ) : null}
                {dailyExpenditure !== 0 ? (
                    <ElementInDay color="red" size={String(dailyExpenditure * -1).length}>
                        {parseInt(dailyExpenditure * -1).toLocaleString()}
                    </ElementInDay>
                ) : null}
                {total !== 0 ? (
                    <ElementInDay color="black" size={String(total).length}>
                        {parseInt(total).toLocaleString()}
                    </ElementInDay>
                ) : null}
            </CostBox>
            <ElementInDay color="gray">{day.format('D')}</ElementInDay>
        </Wrapper>
    );
};

export default Day;

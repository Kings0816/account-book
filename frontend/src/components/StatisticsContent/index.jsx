import React from 'react';
import { nanoid } from 'nanoid';

import { useModal } from '../../hooks/useModal';
import { Wrapper, OuterBox, InnerBox, Category, Content, Cost } from './style';

const [CATEGORY_INDEX, COST_INDEX] = [0, 1];

const StatisticsContent = ({ transactionsByCategory }) => {
    const { openModal, closeModal } = useModal();

    const changeCategory = (transactions) => {
        closeModal('categoryTransaction');
        openModal('categoryTransaction', transactions);
    };

    const summaryByCategory = Array.from(transactionsByCategory.entries())
        .sort((a, b) => b[COST_INDEX].percent - a[COST_INDEX].percent)
        .map((percentWithCategory) => {
            const { name, color } = percentWithCategory[CATEGORY_INDEX];
            const { transactions, percent, expenditureInCategory } =
                percentWithCategory[COST_INDEX];
            return expenditureInCategory !== 0 ? (
                <OuterBox key={nanoid()} onClick={() => changeCategory(transactions)}>
                    <InnerBox>
                        <Category color={color}>{name}</Category>
                        <Content>{Math.ceil(percent)}%</Content>
                    </InnerBox>
                    <Cost>{parseInt(expenditureInCategory).toLocaleString()}</Cost>
                </OuterBox>
            ) : null;
        });

    return <Wrapper>{summaryByCategory}</Wrapper>;
};

export default StatisticsContent;

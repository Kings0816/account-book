import React from 'react';

import PropTypes from 'prop-types';

import { useCurrentModal } from './hooks';
import { Wrapper, OuterBox, Category, InnerBox, Content, Method, Cost } from './style';

const Transaction = ({ transaction }) => {
    const [changeModalState] = useCurrentModal(transaction);

    return (
        <Wrapper onClick={changeModalState}>
            <OuterBox>
                <Category data-testid="category">{transaction.category}</Category>
                <InnerBox>
                    <Content data-testid="content">{transaction.content}</Content>
                    <Method data-testid="method">{transaction.method}</Method>
                </InnerBox>
            </OuterBox>
            <Cost data-testid="cost">
                {transaction.sign + parseInt(transaction.cost).toLocaleString('ko-KR')}원
            </Cost>
        </Wrapper>
    );
};

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired,
};

export default Transaction;

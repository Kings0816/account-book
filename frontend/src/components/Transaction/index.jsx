import React from 'react';
import PropTypes from 'prop-types';

import { useModal } from '../../hooks/useModal';
import { Wrapper, OuterBox, Category, InnerBox, Content, Method, Cost } from './style';

const Transaction = ({ transaction }) => {
    const { openModal } = useModal();

    return (
        <Wrapper onClick={() => openModal('transaction', transaction)}>
            <OuterBox>
                <Category data-testid="category">{transaction.category || '미분류'}</Category>
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

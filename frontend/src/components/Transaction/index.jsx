import React from 'react';

import PropTypes from 'prop-types';

import { useCurrentModal } from './hooks';
import { Wrapper, OuterBox, Category, InnerBox, Content, Method, Cost } from './style';

const Transaction = ({ transaction }) => {
    const [changeModalState] = useCurrentModal(transaction);

    return (
        <Wrapper onClick={changeModalState}>
            <OuterBox>
                <Category>{transaction.category}</Category>
                <InnerBox>
                    <Content>{transaction.content}</Content>
                    <Method>{transaction.method}</Method>
                </InnerBox>
            </OuterBox>
            <Cost>{transaction.sign + parseInt(transaction.cost).toLocaleString('ko-KR')}원</Cost>
        </Wrapper>
    );
};

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired,
};

export default Transaction;

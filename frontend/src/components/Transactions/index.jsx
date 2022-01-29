import React from 'react';
import styled from 'styled-components';

import Summary from '../Summary';
import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Transactions = () => {
    return (
        <Wrapper>
            <Summary />
            <TransactionContainer>내역 리스팅</TransactionContainer>
        </Wrapper>
    );
};

export default Transactions;

const Wrapper = styled.div`
    width: calc(100vw - 15px);
    height: calc(100vh - 125px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const TransactionContainer = styled.ul`
    margin-top: 20px;
    width: 100%;
`;

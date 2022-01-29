import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Main = () => {
    return (
        <>
            <Header current={'main'} />
            <MainWrapper>
                <Summary />
                <Transactions />
            </MainWrapper>
        </>
    );
};

export default Main;

const MainWrapper = styled.div`
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

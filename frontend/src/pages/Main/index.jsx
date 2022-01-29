import React from 'react';

import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';

import { MainWrapper } from './style';

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

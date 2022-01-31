import React, { Suspense } from 'react';

import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';

import { MainWrapper } from './style';

const Main = () => {
    return (
        <>
            <Header current={'main'} />
            <MainWrapper>
                <Suspense fallback={<div>Loading...</div>}>
                    <Summary />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Transactions />
                </Suspense>
            </MainWrapper>
        </>
    );
};

export default Main;

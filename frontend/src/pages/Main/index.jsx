import React, { Suspense, useEffect } from 'react';

import { usefetchMethodAndCategory } from './hooks';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import TransactionCreator from '../../components/TransactionCreator';
import Transactions from '../../components/Transactions';
import { MainWrapper, TransactionBox } from './style';

const Main = () => {
    const [fetchMethod, fetchCategory] = usefetchMethodAndCategory();

    useEffect(() => {
        fetchMethod();
        fetchCategory();
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'main'} />
            <MainWrapper>
                <Summary />
                <TransactionBox>
                    <TransactionCreator />
                    <Transactions />
                </TransactionBox>
            </MainWrapper>
        </Suspense>
    );
};

export default Main;

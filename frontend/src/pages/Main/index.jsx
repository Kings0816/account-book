import React, { Suspense, useEffect } from 'react';

import { usefetchMethodAndCategory } from './hooks';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';
import { MainWrapper } from './style';

const Main = () => {
    const [fetchMethod, fetchCategory] = usefetchMethodAndCategory();

    useEffect(() => {
        fetchMethod();
        fetchCategory();
    }, []);

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

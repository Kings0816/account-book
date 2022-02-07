import React, { Suspense, useEffect } from 'react';

import { usefetchMethods } from './hooks';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';
import { MainWrapper } from './style';

const Main = () => {
    const [fetchMethods] = usefetchMethods();

    useEffect(() => {
        fetchMethods();
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

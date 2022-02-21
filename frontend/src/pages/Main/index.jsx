import React, { Suspense, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Summary from '../../components/Summary';
import TransactionCreator from '../../components/TransactionCreator';
import Transactions from '../../components/Transactions';
import { usefetchMethodAndCategory, useFilterdTransactions } from './hooks';
import { checkState } from '../../recoil/check/atom';
import { MainWrapper, TransactionBox } from './style';

const Main = () => {
    const check = useRecoilValue(checkState);
    const { filterdTransactions } = useFilterdTransactions(check);
    const [fetchMethod, fetchCategory] = usefetchMethodAndCategory();

    useEffect(() => {
        fetchMethod();
        fetchCategory();
    }, []);

    return (
        <MainWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <Summary />
                <TransactionBox>
                    <TransactionCreator />
                    <Transactions transactions={filterdTransactions} />
                </TransactionBox>
            </Suspense>
        </MainWrapper>
    );
};

export default Main;

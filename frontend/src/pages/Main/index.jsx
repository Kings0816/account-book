import React, { Suspense, useEffect } from 'react';

import { usefetchMethodAndCategory } from './hooks';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';
import fabImg from '../../../public/assets/fab-button.svg';
import { MainWrapper, TransactionBox, CreatorContainer, Creator, Fab } from './style';

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
                <TransactionBox>
                    <CreatorContainer>
                        <Creator type="button" onClick={() => console.log(111)}>
                            내역 추가하기
                        </Creator>
                    </CreatorContainer>
                    <Fab>
                        <button type="button" onClick={() => console.log(111)}>
                            <img src={fabImg} />
                        </button>
                    </Fab>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Transactions />
                    </Suspense>
                </TransactionBox>
            </MainWrapper>
        </>
    );
};

export default Main;

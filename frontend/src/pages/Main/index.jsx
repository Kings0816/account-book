import React from 'react';

import Header from '../../components/Header';
import Transactions from '../../components/Transactions';

const Main = () => {
    return (
        <>
            <Header current={'main'} />
            <Transactions />
        </>
    );
};

export default Main;

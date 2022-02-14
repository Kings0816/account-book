import React, { Suspense } from 'react';

import Header from '../../components/Header';
import CalendarTable from '../../components/CalendarTable';
import { MainWrapper } from './style';

const Calendar = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'calendar'} />
            <MainWrapper>
                <CalendarTable />
            </MainWrapper>
        </Suspense>
    );
};

export default Calendar;

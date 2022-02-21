import React, { Suspense } from 'react';

import CalendarTable from '../../components/CalendarTable';
import { MainWrapper } from './style';

const Calendar = () => {
    return (
        <MainWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <CalendarTable />
            </Suspense>
        </MainWrapper>
    );
};

export default Calendar;

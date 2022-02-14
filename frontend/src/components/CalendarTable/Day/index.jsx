import React from 'react';

import { Wrapper, CostBox, ElementInDay } from './style';

const Day = ({ day }) => {
    return (
        <Wrapper>
            <CostBox>
                <ElementInDay color="blue" size={'3,880,000'.length}>
                    3,880,000
                </ElementInDay>
                <ElementInDay color="red" size={'-2,700,000'.length}>
                    -2,700,000
                </ElementInDay>
                <ElementInDay color="black" size={'900,000'.length}>
                    900,000
                </ElementInDay>
            </CostBox>
            <ElementInDay color="gray">{day.format('D')}</ElementInDay>
        </Wrapper>
    );
};

export default Day;

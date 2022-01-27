import React from 'react';
import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Summary = () => {
    return (
        <SummaryContainer>
            <SummaryBox color={'gray'}>
                <span>
                    <input type="checkbox" checked /> 총 이체
                </span>
                <span>7건</span>
            </SummaryBox>
            <SummaryBox color={'blue'}>
                <span>
                    <input type="checkbox" checked /> 수입
                </span>
                <span>3,215,710원</span>
            </SummaryBox>
            <SummaryBox color={'mint'}>
                <span>
                    <input type="checkbox" checked /> 지출
                </span>
                <span>1,578,600원</span>
            </SummaryBox>
        </SummaryContainer>
    );
};

export default Summary;

const SummaryContainer = styled.div`
    width: 300px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.shadow.thick};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        padding-left: 15px;
        width: 100%;
        height: 50px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        box-shadow: ${({ theme }) => theme.shadow.pale};
    }
`;

const SummaryBox = styled.div`
    margin: 0px 15px;
    width: calc(100% - 30px);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.default};
    color: ${(props) =>
        ({ theme }) =>
            theme.color[props.color]};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

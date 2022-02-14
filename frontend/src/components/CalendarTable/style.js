import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

// TODO scroll 시 헤더는 고정되도록 해보자
export const DayBar = styled.thead`
    width: 60%;
    height: 53px;
    min-height: 53px;
    margin: -20px auto 0px;

    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.pale};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px;
        width: 100%;

        border: none;
        border-radius: 0px;
    }
`;

export const DayBox = styled.tr`
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const MonthContainer = styled.tbody`
    width: 60%;
    margin: 20px auto;

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.thick};

    tr:last-child {
        border-bottom: 0px;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 10px 0px 0px 0px;
        width: 100%;

        border: none;
        border-radius: 0px;
        box-shadow: none;

        tr:last-child {
            border-bottom: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
        }
    }
`;

export const Footer = styled.tfoot`
    width: 60%;
    margin: 20px auto 0px;
    height: 50px;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        margin-top: 10px;
        height: 30px;
    }
`;

export const SummaryRow = styled.tr`
    height: 100%;
    padding: 0px 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.color.gray};
    font-weight: bold;

    & > td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        padding: 0px 5px 0px;

        font-size: ${({ theme }) => theme.fontSize.miniL2};
    }
`;

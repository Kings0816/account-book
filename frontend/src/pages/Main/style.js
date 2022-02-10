import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const MainWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 125px);
    min-width: 228px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const TransactionBox = styled.div`
    width: 100%;
    height: calc(100% - 150px);
`;

export const CreatorContainer = styled.div`
    margin: 20px auto 0px;
    width: 90%;
    height: 37px;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        display: none;
    }
`;

export const Creator = styled.button`
    width: 120px;
    height: 100%;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.default};
    border: 2px solid ${({ theme }) => theme.color.mint};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mint};
`;

export const Fab = styled.div`
    display: none;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        z-index: 1;
        position: fixed;
        right: 5%;
        bottom: 30px;

        display: block;
    }
`;

import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const MainWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 125px);
    min-width: 228px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const DonutBox = styled.div`
    width: 70%;
    margin-top: -20px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 90%;
        margin-top: 0px;

        flex-direction: column;
        justify-content: flex-start;

        border: none;
        background: none;
        box-shadow: none;
        border-radius: none;
    }
`;

export const EmptyBox = styled.div`
    width: 70%;
    height: 100%;
    margin: 20px auto;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;

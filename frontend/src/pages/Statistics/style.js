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

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 90%;

        flex-direction: column;
        justify-content: flex-start;
    }
`;

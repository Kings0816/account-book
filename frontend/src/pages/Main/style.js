import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const MainWrapper = styled.div`
    width: calc(100vw - 15px);
    height: calc(100vh - 125px);
    min-width: 228px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../../utils/constant/device-size';

export const Wrapper = styled.tr`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    box-sizing: border-box;
    border-bottom: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};

    td:last-child {
        border-right: 0px;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin-bottom: 10px;

        border-top: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
    }
`;

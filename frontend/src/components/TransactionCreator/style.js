import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

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

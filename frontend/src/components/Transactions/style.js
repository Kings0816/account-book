import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const TransactionsContainer = styled.ul`
    margin-top: 20px;
    width: ${(props) => (props.width ? props.width : 100)}%;
    height: calc(100% - 150px);

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-height: calc(100% - 50px);
        width: 100%;
    }
`;

export const EmptyBox = styled.div`
    width: 70%;
    height: 100%;
    margin: 20px auto 0px;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;

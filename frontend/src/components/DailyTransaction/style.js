import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const DailyInfo = styled.div`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #d7d7d7;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px 15px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

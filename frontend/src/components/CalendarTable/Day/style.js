import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../../utils/constant/device-size';

export const Wrapper = styled.td`
    width: calc(100% / 7);
    height: 12vh;
    min-height: 75px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: end;
    box-sizing: border-box;
    border-right: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
    font-size: ${({ theme }) => theme.fontSize.mini};
    background-color: ${({ theme }) =>
        (props) =>
            props.isToday ? theme.color.darkBlue : theme.color.white};
    ${(props) => (props.isToday ? 'opacity: 0.7' : null)};

    & > span:last-child {
        padding: 0px 7px 7px 0px;
    }
`;

export const CostBox = styled.div`
    width: 100%;
    padding: 7px 7px 0px 0px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    font-weight: bold;

    box-sizing: border-box;
`;

export const ElementInDay = styled.span`
    width: 90%;

    color: ${({ theme }) =>
        (props) =>
            theme.color[props.color]};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        font-size: calc(100% / ${(props) => props.size});
    }
`;

import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const Wrapper = styled.ul`
    width: 50%;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
    }
`;

export const OuterBox = styled.li`
    width: 90%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};

    &:hover {
        transform: scale(1.01);
        background: ${({ theme }) => theme.color.brigtenL2Gray};
        cursor: pointer;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        padding: 10px 0px;
    }
`;

export const InnerBox = styled.div`
    width: 200px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Category = styled.span`
    width: 100px;
    padding: 5px 0px;

    text-align: center;

    border-radius: 999px;
    box-sizing: border-box;

    color: ${({ theme }) => theme.color.white};
    background-color: ${(props) => props.color};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 70px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

export const Content = styled.span`
    width: 30px;
    margin-left: 20px;

    color: ${({ theme }) => theme.color.gray};
`;

export const Cost = styled.span`
    width: calc(100% - 140px);

    text-align: right;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: calc(100% - 100px);
    }
`;

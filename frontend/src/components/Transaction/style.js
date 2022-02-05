import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const Wrapper = styled.li`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0px;

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
        margin: 0px 15px;
    }
`;

export const OuterBox = styled.div`
    width: 70%;

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
    background-color: ${({ theme }) => theme.color.mint};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 70px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

export const InnerBox = styled.div`
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: calc(100% - 70px);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const Content = styled.span`
    width: 70%;
    padding-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const Method = styled.span`
    width: 30%;

    color: ${({ theme }) => theme.color.gray};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        padding: 3px 0px 0px 10px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

export const Cost = styled.span`
    width: 25%;

    text-align: right;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-width: 100px;
    }
`;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Transaction = ({ transaction }) => {
    return (
        <Wrapper>
            <OuterBox>
                <Category>{transaction.category}</Category>
                <InnerBox>
                    <Content>{transaction.content}</Content>
                    <Method>{transaction.method}</Method>
                </InnerBox>
            </OuterBox>
            <Cost>{transaction.sign + parseInt(transaction.cost).toLocaleString('ko-KR')}원</Cost>
        </Wrapper>
    );
};

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired,
};

export default Transaction;

const Wrapper = styled.li`
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

const OuterBox = styled.div`
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Category = styled.span`
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

const InnerBox = styled.div`
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

const Content = styled.span`
    width: 70%;
    padding-left: 10px;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        max-width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Method = styled.span`
    width: 30%;

    color: ${({ theme }) => theme.color.gray};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        padding: 3px 0px 0px 10px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

const Cost = styled.span`
    width: 25%;

    text-align: right;

    font-weight: bold;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-width: 100px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

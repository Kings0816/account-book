import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import previous from '../../../public/assets/previous-button.svg';
import next from '../../../public/assets/next-button.svg';
import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Header = () => {
    return (
        <Wrapper>
            <Title>JH Account Book</Title>
            <DateBox>
                <ArrowButton>
                    <img src={previous} />
                </ArrowButton>
                <Date>2022년 01월</Date>
                <ArrowButton>
                    <img src={next} />
                </ArrowButton>
            </DateBox>
            <PageBox>
                <PageTarget to="/">내역</PageTarget>
                <PageTarget to="/calendar">달력</PageTarget>
                <PageTarget to="/statistics">통계</PageTarget>
            </PageBox>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    width: 100vw;
    min-width: 169px;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.shadow.pale};

    background-color: ${({ theme }) => theme.color.mint};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

const Title = styled.h1`
    margin: 0px 15px;

    font-weight: bold;
    font-family: sans-serif;
    font-size: ${({ theme }) => theme.fontSize.medium};

    color: ${({ theme }) => theme.color.white};
`;

const DateBox = styled.div`
    margin-top: 7px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.small};
`;

const ArrowButton = styled.button`
    margin-top: 3px;
`;

const Date = styled.strong`
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
`;

const PageBox = styled.div`
    margin: 7px 0px 0px 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin-left: 0px;
    }
`;

const PageTarget = styled(Link)`
    margin-left: 10px;
    text-decoration: none;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.small};

    color: ${({ theme }) => theme.color.black};

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.white};
    }
`;

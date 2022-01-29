import React from 'react';
import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

const Login = () => {
    const requestLogin = () => {
        const codeRequestUrl = process.env.CODE_REQUEST_URL;
        window.location.href = codeRequestUrl;
    };

    return (
        <Wrapper>
            <Description>JH Account Book</Description>
            <LoginButton type="submit" onClick={requestLogin}>
                Github로 로그인
            </LoginButton>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div`
    width: 400px;
    max-width: 100%;
    height: 67vh;
    margin: 17vh auto;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.shadow.thick};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        border-radius: 0px;
        box-sizing: none;
        box-shadow: none;
    }
`;

const Description = styled.div`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.large};
`;

const LoginButton = styled.button`
    width: 70%;
    height: 15%;

    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.mint};

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.small};
`;

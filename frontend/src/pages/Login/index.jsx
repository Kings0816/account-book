import React from 'react';
import styled from 'styled-components';

const Login = () => {
    const requestLogin = () => {
        const codeRequestUrl = process.env.CODE_REQUEST_URL;
        window.location.href = codeRequestUrl;
    };

    return (
        <Wrapper>
            <Description>Welcome</Description>
            <LoginButton type="submit" onClick={requestLogin}>
                Github로 로그인
            </LoginButton>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div`
    width: 400px;
    height: 63vh;
    margin: 17vh auto;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid #d7d7d7;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 / 33%) 0px 10px 25px;
`;

const Description = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

const LoginButton = styled.button`
    width: 70%;
    height: 15%;

    border: none;
    border-radius: 3px;
    background-color: rgb(6, 214, 160);

    font-size: 1.3rem;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`;

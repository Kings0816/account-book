import React from 'react';

import { Wrapper, Description, LoginButton } from './style';

const Login = () => {
    const requestLogin = () => {
        const codeRequestUrl = process.env.CODE_REQUEST_URL;
        window.location.href = codeRequestUrl;
    };

    return (
        <Wrapper>
            <Description>JH Account Book</Description>
            <LoginButton type="submit" onClick={requestLogin}>
                Github로 로그인 테스트 3
            </LoginButton>
        </Wrapper>
    );
};

export default Login;

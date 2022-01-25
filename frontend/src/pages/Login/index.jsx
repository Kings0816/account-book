import React from 'react';

const Login = () => {
    const requestLogin = () => {
        const codeRequestUrl = process.env.CODE_REQUEST_URL;
        window.location.href = codeRequestUrl;
    };

    return (
        <>
            <div>Welcome to 준혁 Account Book!!</div>
            <button type="submit" onClick={requestLogin}>
                Github로 로그인
            </button>
        </>
    );
};

export default Login;

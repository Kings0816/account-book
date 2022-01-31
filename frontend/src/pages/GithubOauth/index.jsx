import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../lib/user';

const GithubOauth = () => {
    const navigate = useNavigate();

    const fetchLogin = async (code) => {
        const result = await postLogin(code);
        if (result) {
            sessionStorage.setItem('userJwt', result.userJwt);
            sessionStorage.setItem('nickname', result.nickname);

            const mainPage = '/';
            navigate(mainPage);
        }
    };

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        fetchLogin(code);
    }, []);

    // TODO 로딩 컴포넌트 만들기
    return <div>로그인 진행중</div>;
};

export default GithubOauth;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Statistics from './pages/Statistics';
import GithubOauth from './pages/GithubOauth';

const Router = () => {
    return (
        <BrowserRouter>
            {/* TODO 설정된 경로 이외의 경로에 대한 Not Found 페이지 렌더링 */}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/auth" element={<GithubOauth />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

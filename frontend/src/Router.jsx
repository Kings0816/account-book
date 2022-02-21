import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Statistics from './pages/Statistics';
import GithubOauth from './pages/GithubOauth';

import AuthRoute from './components/AuthRoute';

const Router = () => {
    return (
        <BrowserRouter>
            {/* TODO 설정된 경로 이외의 경로에 대한 Not Found 페이지 렌더링 */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/auth" element={<GithubOauth />} />
                <Route
                    path="/"
                    element={
                        <AuthRoute current={'main'}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Main />
                            </Suspense>
                        </AuthRoute>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <AuthRoute current={'calendar'}>
                            <Calendar />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/statistics"
                    element={
                        <AuthRoute current={'statistics'}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Statistics />
                            </Suspense>
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

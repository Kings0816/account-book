import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const Login = lazy(() => import('./pages/Login'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Statistics = lazy(() => import('./pages/Statistics'));
const GithubOauth = lazy(() => import('./pages/GithubOauth'));

const AuthRoute = lazy(() => import('./components/AuthRoute'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;

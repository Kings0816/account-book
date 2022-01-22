import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import Statistics from './pages/Statistics';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/calendar" element={<Calendar />} />
                <Route exact path="/statistics" element={<Statistics />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

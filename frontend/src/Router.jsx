import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Test1 />} />
                <Route exact path="/test" element={<Test2 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

import React, { Suspense } from 'react';
import { nanoid } from 'nanoid';

import Header from '../../components/Header';
import { MainWrapper, DonutCircle } from './style';

const Statistics = () => {
    const datas = [
        {
            percent: 37,
            color: '#80e080',
        },
        {
            percent: 33,
            color: '#4fc3f7',
        },
        {
            percent: 20,
            color: '#9575cd',
        },
        {
            percent: 10,
            color: '#f06292',
        },
    ];

    const [cx, cy, r, width, startAngle] = [50, 50, 30, 15, -90];
    const dashArray = 2 * Math.PI * r;
    const animationDuration = 1000;
    let accumulatePercent = 0;
    const circles = datas.map((data) => {
        const dashOffset = dashArray - (dashArray * data.percent) / 100;
        const angle = (accumulatePercent * 360) / 100 + startAngle;
        const currentDuration = (animationDuration * data.percent) / 100;
        const delay = (animationDuration * accumulatePercent) / 100;
        accumulatePercent += data.percent;
        return (
            <DonutCircle
                key={nanoid()}
                cx={cx}
                cy={cy}
                r={r}
                fill={'transparent'}
                color={data.color}
                width={width}
                dashArray={dashArray}
                dashOffset={dashOffset}
                angle={angle}
                currentDuration={currentDuration}
                delay={delay}
            />
        );
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'statistics'} />
            <MainWrapper>
                <svg viewBox="0 0 100 100">{circles}</svg>
            </MainWrapper>
        </Suspense>
    );
};

export default Statistics;

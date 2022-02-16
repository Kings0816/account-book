import React from 'react';
import { nanoid } from 'nanoid';

import { DonutCircle } from './style';

const [CX, CY, R, WIDTH, START_ANGLE] = [50, 50, 30, 15, -90];
const [CATEGORY_INDEX, COST_INDEX] = [0, 1];
const ANIMATION_DURATION = 1000;

const Donut = ({ transactionsByCategory }) => {
    const dashArray = 2 * Math.PI * R;
    let accumulatePercent = 0;

    const circles = Array.from(transactionsByCategory.entries())
        .sort((a, b) => b[COST_INDEX].percent - a[COST_INDEX].percent)
        .map((percentWithCategory) => {
            const color = percentWithCategory[CATEGORY_INDEX].color;
            const percent = percentWithCategory[COST_INDEX].percent;

            const dashOffset = dashArray - (dashArray * percent) / 100;
            const angle = (accumulatePercent * 360) / 100 + START_ANGLE;
            const currentDuration = (ANIMATION_DURATION * percent) / 100;
            const delay = (ANIMATION_DURATION * accumulatePercent) / 100;
            accumulatePercent += percent;
            return (
                <DonutCircle
                    key={nanoid()}
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill={'transparent'}
                    color={color}
                    width={WIDTH}
                    dashArray={dashArray}
                    dashOffset={dashOffset}
                    angle={angle}
                    currentDuration={currentDuration}
                    delay={delay}
                />
            );
        });

    return <svg viewBox="0 0 100 100">{circles}</svg>;
};

export default Donut;

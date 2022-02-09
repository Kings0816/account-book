import { useState } from 'react';

import { CATEGORY_COLORS } from '../../utils/constant/category-color';

export const useColor = () => {
    const [currentColor, setCurrentColor] = useState(0);

    const changeColor = () => {
        const nextColor = currentColor === CATEGORY_COLORS.length - 1 ? 0 : currentColor + 1;
        setCurrentColor(nextColor);
    };

    return { currentColor, changeColor };
};

export const useSumbit = (onCreate) => {
    const shapedForm = (elements) => {
        const data = {};
        Array.from(elements).forEach((element) => {
            if (element.value) {
                data[element.id] = element.value;
            }
        });
        return data;
    };

    const handleUpdateSubmit = (sign, e) => {
        e.preventDefault();

        const { elements } = e.target;
        const data = shapedForm(elements);
        onCreate(data.name, data.color, sign);
    };

    return { handleUpdateSubmit };
};

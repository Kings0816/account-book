import { useState, useEffect } from 'react';

export const useResizeHeight = () => {
    const [resizeHeight, setResizeHeight] = useState(null);

    const updateHieght = () => {
        if (resizeHeight == null) {
            setResizeHeight(window.screen.availHeight);
            return;
        }
        setResizeHeight(null);
    };

    useEffect(() => {
        window.addEventListener('resize', updateHieght);
        return () => {
            window.removeEventListener('resize', updateHieght);
        };
    });

    return { resizeHeight };
};

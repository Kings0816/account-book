import { useRef, useState, useEffect } from 'react';

export const useResizeHeight = () => {
    const normalHeight = useRef(window.innerHeight);
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight);

    const updateHieght = () => {
        if (normalHeight.current !== window.innerHeight) {
            setResizeHeight(window.screen.height);
            return;
        }
        setResizeHeight(normalHeight.current);
    };

    useEffect(() => {
        window.addEventListener('resize', updateHieght);
        return () => {
            window.removeEventListener('resize', updateHieght);
        };
    }, []);

    return { resizeHeight };
};

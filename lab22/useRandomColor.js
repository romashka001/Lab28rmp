import { useState, useEffect } from 'react';

const useRandomColor = () => {
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            setColor(randomColor);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return color;
};

export default useRandomColor;

import { useState } from 'react';

type Function = () => [string | null, (newLayout: string) => void];

const usePlantsLayout : Function = () => {

    const [layout, setLayout] = useState<string | null>(localStorage.getItem('layout') === null || window.screen.width <= 900 ? 'columns' : localStorage.getItem('layout'));

    const changeLayout = (newLayout : string) => {
        localStorage.setItem('layout', newLayout);
        setLayout(newLayout);
    }

    return [layout, changeLayout];
}

export default usePlantsLayout;
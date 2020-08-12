import { useEffect, useState, useRef } from 'react';

type Function = () => { ref : any, scrolled : boolean };

const useFeatures : Function = () => {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const [distanceScrolled, setDistance] = useState<number>(0);
    const ref : any = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scroll = () => setDistance(window.pageYOffset);
        if (distanceScrolled >= ref.current?.offsetTop / 2) setScrolled(true);
        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, [scrolled, distanceScrolled]);

    return { ref, scrolled }
}

export default useFeatures;
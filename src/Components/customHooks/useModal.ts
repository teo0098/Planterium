import { useState, useEffect } from 'react';

type Function = () => boolean;

const useModal : Function = () => {

    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        const fadeModalOut = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(fadeModalOut);
    });

    return show;
}

export default useModal;
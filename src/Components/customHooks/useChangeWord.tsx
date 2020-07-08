import { useState, useEffect } from 'react';

const words : Array<string> = ["easily", "superbly", "suitably"];

type Function = () => [number, string];

const useChangeWord : Function = () => {

    const [word, setWord] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setWord(prevState => prevState >= 2 ? 0 : ++prevState);
        }, 3000);
    }, [word]);

    return [ word, words[word] ];
}

export default useChangeWord;
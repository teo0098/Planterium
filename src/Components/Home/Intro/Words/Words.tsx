import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import WordsStyles from './Words.module.scss';
import useChangeWord from '../../../customHooks/useChangeWord';

const Words : React.FC = () => {

    const [word, wordText] = useChangeWord();

    return (
        <div className={WordsStyles.Word}>
            <div className={WordsStyles.Word__div}>
                <AnimatePresence exitBeforeEnter custom={word} initial={false}>
                    {word > -1 && (
                        <motion.span
                        className={WordsStyles.Word__text}
                        key={word}
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: '0' }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 0.5 }}
                        >
                            {wordText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Words;
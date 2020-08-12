import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ModalStyles from './Modal.module.scss';
import useModal from '../customHooks/useModal';

const Modal : React.FC = ({ children }) => {

    const show = useModal();

    return (
        <AnimatePresence>
            {show && (
                <motion.div className={ModalStyles.Modal}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;
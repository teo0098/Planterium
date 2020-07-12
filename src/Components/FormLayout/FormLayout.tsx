import React from 'react';

import FormLayoutStyles from './FormLayout.module.scss';

const FormLayout : React.FC = ({ children }) => {
    return (
        <div className={FormLayoutStyles.FormLayout}>
            <div className={FormLayoutStyles.FormLayout__div}>
                {children}
            </div>
        </div>
    )
}

export default FormLayout;
import React from 'react';

import FormInputsLayoutStyles from './FormInputsLayout.module.scss';

const FormInputsLayout : React.FC = ({ children }) => (
    <div className={FormInputsLayoutStyles.FormInputsLayout}>
        {children}
    </div>
)

export default FormInputsLayout;
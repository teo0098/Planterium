import React from 'react';
import Alert from '@material-ui/lab/Alert';

import ErrorStyles from './Error.module.scss';

const Error : React.FC = ({ children }) => (
    <div className={ErrorStyles.Error}>
        <div className={ErrorStyles.Error__msg}>
            <Alert style={{ textAlign: 'left' }} severity="error"> {children} </Alert>
        </div>
    </div>
)

export default Error;
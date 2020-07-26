import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';

const RepeatPassword : React.FC = () => (
    <Field name="rpassword" component="input">
        {({ input, meta }) => (
            <div>
                <TextField type="password" style={inputStyles} {...input} label="Repeat password" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default RepeatPassword;
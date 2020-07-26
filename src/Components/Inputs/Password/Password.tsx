import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { passwordValidation } from '../../../inputsValidations';

const Password : React.FC = () => (
    <Field name="password" component="input" validate={passwordValidation}>
        {({ input, meta }) => (
            <div>
                <TextField type="password" style={inputStyles} {...input} label="Password" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Password;
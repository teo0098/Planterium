import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { loginValidation } from '../../../inputsValidations';

const Login : React.FC = () => (
    <Field name="login" component="input" validate={loginValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Email or nickname" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Login;
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { emailValidation } from '../../Contact/contactValidation';

const Email : React.FC = () => (
    <Field name="email" component="input" validate={emailValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Email" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Email;
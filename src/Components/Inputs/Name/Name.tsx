import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { nameValidation } from '../../../inputsValidations';

const Name : React.FC = () => (
    <Field name="name" component="input" validate={nameValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Name" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Name;
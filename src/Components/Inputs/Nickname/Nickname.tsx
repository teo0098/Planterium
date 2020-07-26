import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { nicknameValidation } from '../../../inputsValidations';

const Nickname : React.FC = () => (
    <Field name="nickname" component="input" validate={nicknameValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Nickname" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Nickname;
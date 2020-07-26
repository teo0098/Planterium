import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { messageValidation } from '../../../inputsValidations';

const Message : React.FC = () => (
    <Field name="message" component="input" validate={messageValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Message" variant="filled"
                multiline rows={4} />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default Message;
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { plantDescValidation } from '../../../inputsValidations';

const PlantDesc : React.FC = () => (
    <Field name="desc" component="input" validate={plantDescValidation}>
        {({ input, meta }) => (
            <div>
                <TextField multiline rows={5} style={inputStyles} {...input} label="Plant's description" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default PlantDesc;
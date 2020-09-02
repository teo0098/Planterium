import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { plantLightValidation } from '../../../inputsValidations';

const PlantLight : React.FC = () => (
    <Field name="light" component="input" validate={plantLightValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="Plant's light" variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default PlantLight;
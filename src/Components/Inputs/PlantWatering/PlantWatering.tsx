import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Field } from 'react-final-form';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import { plantWateringValidation } from '../../../inputsValidations';

const PlantWatering : React.FC = () => (
    <Field name="watering" component="input" validate={plantWateringValidation}>
        {({ input, meta }) => (
            <div>
                <TextField style={inputStyles} {...input} label="* Plant's watering" placeholder="Per how many hours?" 
                variant="filled" />
                {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
            </div>
        )}
    </Field>
)

export default PlantWatering;
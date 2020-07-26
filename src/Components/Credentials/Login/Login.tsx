import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import createDecorator from 'final-form-focus';

import Credentials from '../Credentials';
import inputStyles from '../../../tsStyleSettings/inputStyles';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import loginValidation from './loginValidation';
import FormInputsLayout from '../../FormInputsLayout/FormInputsLayout';

const onSubmit = (values : any) => {
    console.log(values);
}

const Login : React.FC = () => {
    return (
        <Credentials>
            <Form onSubmit={onSubmit} decorators={[createDecorator()]}>
                {({ handleSubmit }) =>
                    <form onSubmit={handleSubmit}>
                        <FormInputsLayout>
                            <Field name="login" component="input" validate={loginValidation}>
                                {({ input, meta }) => (
                                    <div>
                                        <TextField style={inputStyles} {...input} label="Email or nickname" variant="filled" />
                                        {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password" component="input" validate={loginValidation}>
                                {({ input, meta }) => (
                                    <div>
                                        <TextField style={inputStyles} {...input} label="Password" variant="filled" />
                                        {meta.error && meta.touched && <Alert style={{ textAlign: 'left' }} severity="error"> {meta.error} </Alert>}
                                    </div>
                                )}
                            </Field>
                        </FormInputsLayout>
                        <Button style={buttonStyles} type="submit" variant="contained" color="primary">Log in</Button>
                    </form>
                }
            </Form>
        </Credentials>
    )
}

export default Login;
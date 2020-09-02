import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';
import createDecorator from 'final-form-focus';

import Credentials from '../Credentials';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import FormInputsLayout from '../../FormInputsLayout/FormInputsLayout';
import useLogin from '../../customHooks/useLogin';
import LoginPassword from '../../Inputs/LoginPassword/LoginPassword';
import LoginInput from '../../Inputs/Login/Login';

const Login : React.FC = () => {

    const { handleOnSubmit, renderStatus } = useLogin();
    const decorator = useMemo(() => createDecorator(), []);

    return (
        <Credentials>
            <Form onSubmit={handleOnSubmit} decorators={[decorator]}>
                {({ handleSubmit }) =>
                    <form onSubmit={handleSubmit}>
                        <FormInputsLayout>
                            <LoginInput />
                            <LoginPassword />
                            {renderStatus()}
                        </FormInputsLayout>
                        <Button style={buttonStyles} type="submit" variant="contained" color="primary">Log in</Button>
                    </form>
                }
            </Form>
        </Credentials>
    )
}

export default Login;
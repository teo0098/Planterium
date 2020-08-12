import React from 'react';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';
import createDecorator from 'final-form-focus';

import Credentials from '../Credentials';
import Nickname from '../../Inputs/Nickname/Nickname';
import Email from '../../Inputs/Email/Email';
import Password from '../../Inputs/Password/Password';
import RepeatPassword from '../../Inputs/RepeatPassword/RepeatPassword';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import FormInputsLayout from '../../FormInputsLayout/FormInputsLayout';
import { rpasswordValidation } from '../../../inputsValidations';
import useSignup from '../../customHooks/useSignup';

const Signup : React.FC = () => {

    const { renderStatus, onSubmit } = useSignup();

    return (
        <Credentials>
            <Form onSubmit={onSubmit}
            decorators={[createDecorator()]}
            validate={rpasswordValidation}>
                {({ handleSubmit }) =>
                    <form onSubmit={handleSubmit}>
                        <FormInputsLayout>
                            <Nickname />
                            <Email />
                            <Password />
                            <RepeatPassword />
                            {renderStatus()}
                        </FormInputsLayout>
                        <Button style={buttonStyles} type="submit" variant="contained" color="primary">Sign up</Button>
                    </form>
                }
            </Form>
        </Credentials>
    )
}

export default Signup;
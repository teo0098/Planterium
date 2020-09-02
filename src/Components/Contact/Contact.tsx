import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import createDecorator from 'final-form-focus';

import Navigation from '../Navigation/Navigation';
import { onSubmit } from './contactSubmit';
import buttonStyles from '../../tsStyleSettings/buttonStyles';
import Name from '../Inputs/Name/Name';
import Email from '../Inputs/Email/Email';
import Message from '../Inputs/Message/Message';
import FormLayout from '../FormLayout/FormLayout';
import FormInputsLayout from '../FormInputsLayout/FormInputsLayout';

const Contact : React.FC = () => {

    const decorator = useMemo(() => createDecorator(), []);

    return (
        <React.Fragment>
            <Navigation variant={2} />
            <FormLayout>
                <Form onSubmit={onSubmit} decorators={[decorator]}>
                    {({ handleSubmit }) => 
                        <React.Fragment>
                            <EmailIcon style={{ fontSize: '40px' }} />
                            <form spellCheck="false" onSubmit={handleSubmit}>
                                <FormInputsLayout>
                                    <Name />
                                    <Email />
                                    <Message />
                                </FormInputsLayout>
                                <Button style={buttonStyles} type="submit" variant="contained" color="primary">Send</Button>
                            </form>
                        </React.Fragment>
                    }
                </Form>
            </FormLayout>
        </React.Fragment>
    )
} 

export default Contact;
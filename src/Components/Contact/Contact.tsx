import React from 'react';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

import Navigation from '../Navigation/Navigation';
import { onSubmit } from './contactValidation';
import ContactStyles from './Contact.module.scss';
import buttonStyles from '../../tsStyleSettings/buttonStyles';
import Name from '../Inputs/Name/Name';
import Email from '../Inputs/Email/Email';
import Message from '../Inputs/Message/Message';
import FormLayout from '../FormLayout/FormLayout';

const Contact : React.FC = () => (
    <React.Fragment>
        <Navigation variant={2} />
        <FormLayout>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => 
                    <React.Fragment>
                        <EmailIcon style={{ fontSize: '40px' }} />
                        <form spellCheck="false" onSubmit={handleSubmit}>
                            <div className={ContactStyles.Contact}>
                                <Name />
                                <Email />
                                <Message />
                            </div>
                            <Button style={buttonStyles} type="submit" variant="contained" color="primary">Send</Button>
                        </form>
                    </React.Fragment>
                }
            </Form>
        </FormLayout>
    </React.Fragment>
)

export default Contact;
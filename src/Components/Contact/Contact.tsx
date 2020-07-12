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

const Contact : React.FC = () => {
    return (
        <React.Fragment>
            <Navigation variant={2} />
            <div className={ContactStyles.Contact}>
                <Form onSubmit={onSubmit}>
                    {({ handleSubmit }) => 
                        <div className={ContactStyles.Contact__div}>
                            <EmailIcon style={{ fontSize: '40px' }} />
                            <form className={ContactStyles.Contact__form} spellCheck="false" onSubmit={handleSubmit}>
                                <div className={ContactStyles.Contact__inputs}>
                                    <Name />
                                    <Email />
                                    <Message />
                                </div>
                                <Button style={buttonStyles} type="submit" variant="contained" color="primary">Send</Button>
                            </form>
                        </div>
                    }
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Contact;
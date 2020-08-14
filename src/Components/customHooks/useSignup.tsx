import React from 'react';
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert/Alert';

import { CREATE_USER } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import ERRORS from '../../credentialsErrors';

type Function = () => { handleOnSubmit: (values: any) => any, renderStatus: () => JSX.Element | undefined };

const useSignup : Function = () => {
    
    const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

    const handleOnSubmit = (values : any) => createUser({
        variables: {
            nickname: values.nickname,
            email: values.email,
            password: values.password
        }
    });

    const renderStatus = () => {
        if (loading) return <Loading />;
        if (error) {
            if (error.message === ERRORS.NICKNAME_EXISTS) {
                return (
                    <Modal>
                        <Alert severity='error'> This nickname already exists in the database. </Alert>
                    </Modal>
                )
            }
            else if (error.message === ERRORS.EMAIL_EXISTS) {
                return (
                    <Modal>
                        <Alert severity='error'> This email already exists in the database. </Alert>
                    </Modal>
                )
            }
            else {
                return (
                    <Modal>
                        <Alert severity='error'> Unable to create your account... Please try again later. </Alert>
                    </Modal>
                )
            }
        }
        if (data) {
            return (
                <Modal>
                    <Alert severity='success'> Your account has been created successfully. </Alert>
                </Modal>
            )
        }
    }

    return { renderStatus, handleOnSubmit };
}

export default useSignup;
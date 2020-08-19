import React from 'react';
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert/Alert';
import { Redirect } from 'react-router-dom';

import { LOGIN } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import ERRORS from '../../ERRORS';

type Function = () => { handleOnSubmit : (values: any) => any, renderStatus : () => JSX.Element | undefined };

const useLogin : Function = () => {
    
    const [login, { loading, error, data }] = useMutation(LOGIN);

    const handleOnSubmit = (values : any) => login({
        variables: {
            login: values.login,
            password: values.password
        }
    });

    const renderStatus = () => {
        if (loading) return <Loading />;
        if (error) {
            if (error.message === ERRORS.WRONG_CREDENTIALS) {
                return (
                    <Modal>
                        <Alert severity='error'> Wrong credentials. </Alert>
                    </Modal>
                )
            }
            else {
                return (
                    <Modal>
                        <Alert severity='error'> Unable to log you in to your account. Please try again later. </Alert>
                    </Modal>
                )
            }
        }
        if (data) {
            return <Redirect push to='/account' />
        }
    }

    return { handleOnSubmit, renderStatus }
}

export default useLogin;
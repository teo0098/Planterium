import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PLANT } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import Alert from '@material-ui/lab/Alert';
import ERRORS from '../../ERRORS';

type Function = (name : string, desc : string, watering : number, light : string) => {
    handleAddPlant : (e : any) => void,
    renderStatus : () => JSX.Element | undefined
}

const useAddPlant : Function = (name, desc, watering, light) => {

    const [addPlant, { loading, error, data }] = useMutation(ADD_PLANT, { onError: () => {} });

    const handleAddPlant = (e : any) => {
        e.stopPropagation();
        addPlant({
            variables: {
                name,
                desc,
                watering,
                light
            }
        });
    }

    const renderStatus = () => {
        if (loading) return <Loading />;
        else if (error) {
            if (error.message === ERRORS.PLANT_EXISTS) return (
                <Modal>
                    <Alert severity='info'> This plant is already included in your garden. </Alert>
                </Modal>
            );
            else if (error.message === ERRORS.UNAUTHORIZED) return (
                <Modal>
                    <Alert severity='info'> Please log in to your account. </Alert>
                </Modal>
            );
            return (
                <Modal>
                    <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
                </Modal>
            );
        }
        else if (data) return (
            <Modal>
                <Alert severity='success'> Plant has been added to your garden successfully. </Alert>
            </Modal>
        );
    }

    return { handleAddPlant, renderStatus };
}

export default useAddPlant;
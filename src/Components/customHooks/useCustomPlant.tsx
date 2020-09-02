import React, { useEffect, useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CREATE_CUSTOM_PLANT } from '../../graphqlMutations';
import Modal from '../Modal/Modal';
import ERRORS from '../../ERRORS';
import PlantsContext from '../../context/plantsContext';

type Function = (menu : boolean) => { handleOnSubmit : (values : any) => any, renderDiv : () => JSX.Element | null };

const useCustomPlant : Function = (menu) => {

    const [createCustomPlant, { loading, error, data }] = useMutation(CREATE_CUSTOM_PLANT, { onError: () => {} });
    const [called, setCalled] = useState<boolean>(false);
    const { setPlants } = useContext(PlantsContext);

    useEffect(() => {
        if (!menu) setCalled(false);
        if (data) setPlants(prevState => {
            const contain = prevState.find(({ name }) => name === data.createCustomPlant.name);
            if (!contain) return [data.createCustomPlant, ...prevState];
            return prevState;
        });
    }, [menu]);

    const handleOnSubmit = (values : any) => {
        setCalled(true);
        createCustomPlant({
            variables: {
                name: values.name,
                watering: +values.watering,
                desc: values.desc,
                light: values.light
            }
        });
    }

    const renderStatus = () => {
        if (loading) return <CircularProgress />;
        else if (error) {
            if (error.message === ERRORS.PLANT_EXISTS) return (
                <Modal>
                    <Alert severity='info'> This plant is already included in your garden. </Alert>
                </Modal>
            )
            return (
                <Modal>
                    <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
                </Modal>
            )
        }
        else if (data) return (
            <Modal>
                <Alert severity='success'> Plant has been added to your garden successfully. </Alert>
            </Modal>
        )
    }

    const renderDiv = () => {
        return (
            called ?
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    {renderStatus()}
                </div>
            : null
        )
    }

    return { handleOnSubmit, renderDiv };
}

export default useCustomPlant;
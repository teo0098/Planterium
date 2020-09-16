import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CREATE_CUSTOM_PLANT } from '../../graphqlMutations';
import Modal from '../Modal/Modal';
import ERRORS from '../../ERRORS';
import PlantsContext from '../../context/plantsContext';
import useGenerateDate from './useGenerateDate';

type Function = (menu : boolean) => { handleOnSubmit : (values : any) => any, renderDiv : () => JSX.Element | null };

const useCustomPlant : Function = (menu) => {

    const [createCustomPlant, { loading, error, data }] = useMutation(CREATE_CUSTOM_PLANT, { onError: () => {} });
    const [called, setCalled] = useState<boolean>(false);
    const { setPlants, skip, quantity } = useContext(PlantsContext);
    const generateDate = useGenerateDate();

    useEffect(() => {
        if (!menu) setCalled(false);
        if (data) setPlants(prevState => {
            const contain = prevState.find(({ name }) => name === data.createCustomPlant.name);
            if (!contain) {
                const newPlants = [data.createCustomPlant, ...prevState];
                if (skip * 5 < quantity) newPlants.pop();
                return newPlants; 
            }
            return prevState;
        });
    }, [menu, data, setPlants, skip, quantity]);

    const handleOnSubmit = useCallback((values : any) => {
        setCalled(true);
        createCustomPlant({
            variables: {
                name: values.name,
                watering: +values.watering,
                desc: values.desc,
                light: values.light,
                lastWatered: generateDate()
            }
        });
    }, [createCustomPlant, generateDate]); 

    const renderStatus = useCallback(() => {
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
    }, [loading, error, data]);

    const renderDiv = useCallback(() => {
        return (
            called ?
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {renderStatus()}
                </div>
            : null
        )
    }, [called, renderStatus]);

    return { handleOnSubmit, renderDiv };
}

export default useCustomPlant;
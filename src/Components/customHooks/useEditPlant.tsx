import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button/Button';
import { motion } from 'framer-motion';

import { ADD_PLANT, REMOVE_PLANT, WATER_PLANT } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import Alert from '@material-ui/lab/Alert';
import ERRORS from '../../ERRORS';
import PlantsContext from '../../context/plantsContext';
import buttonStyles from '../../tsStyleSettings/buttonStyles';
import PlantSectionInfo from '../Plants/PlantsLayout/PlantSectionInfo/PlantSectionInfo';
import { color6, color7 } from '../../tsStyleSettings/colors';

type Function = (name : string, desc : string, watering : number, light : string, watered : string | null, irrigation : number | null) => {
    renderAddStatus : () => JSX.Element | undefined,
    renderButton : () => JSX.Element | undefined,
    renderInfo : () => JSX.Element | undefined,
    renderRemoveStatus : () => JSX.Element | undefined,
    renderWaterStatus : () => JSX.Element | undefined,
    wrapDown : boolean,
    setWrapDown : React.Dispatch<React.SetStateAction<boolean>>
}

const useAddPlant : Function = (name, desc, watering, light, watered, irrigation) => {

    const [addPlant, { loading: addLoading, error: addError, data: addData }] = useMutation(ADD_PLANT, { onError: () => {} });
    const [removePlant, { loading: removeLoading, error: removeError, data: removeData }] = useMutation(REMOVE_PLANT, { onError: () => {} });
    const [waterPlant, { loading: waterLoading, error: waterError, data: waterData }] = useMutation(WATER_PLANT, { onError: () => {} });
    const { cache, setPlants, searchName, setQuantity , skip, quantity } = useContext(PlantsContext);
    const [irrigationRate, setIrrigationRate] = useState<number | null>(irrigation);
    const [lastWatered, setLastWatered] = useState<string | null>(watered);
    const [called, setCalled] = useState<boolean>(false);
    const [wrapDown, setWrapDown] = useState<boolean>(false);

    useEffect(() => {
        if (!wrapDown) setCalled(false);
        if (waterData) {
            setIrrigationRate(100);
            setLastWatered(waterData.waterPlant);
        }
        if (removeData) {
            setPlants(prevState => {
                const filteredPlants = prevState.filter(plant => plant.name !== name);
                return removeData.removePlant ? [...filteredPlants, removeData.removePlant] : filteredPlants;
            });
            setQuantity(prevState => --prevState);
        }
    }, [waterData, removeData, name, setPlants, setQuantity, wrapDown]);

    const handleAddPlant = useCallback((e : any) => {
        e.stopPropagation();
        setCalled(true);
        addPlant({
            variables: {
                name,
                desc,
                watering,
                light
            }
        });
    }, [addPlant, desc, light, name, watering]);

    const handleRemovePlant = useCallback((e : any) => {
        e.stopPropagation();
        setCalled(true);
        removePlant({
            variables: {
                name,
                searchName,
                skip,
                quantity
            }
        });
    }, [removePlant, name, searchName, skip, quantity]);

    const handleWaterPlant = useCallback((e : any) => {
        e.stopPropagation();
        setCalled(true);
        waterPlant({
            variables: {
                name
            }
        });
    }, [waterPlant, name]);

    const renderAddStatus = useCallback(() => {
        if (addLoading) return <Loading />;
        else if (addError && called) {
            if (addError.message === ERRORS.PLANT_EXISTS) return (
                <Modal>
                    <Alert severity='info'> This plant is already included in your garden. </Alert>
                </Modal>
            );
            else if (addError.message === ERRORS.UNAUTHORIZED) return (
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
        else if (addData && called) return (
            <Modal>
                <Alert severity='success'> Plant has been added to your garden successfully. </Alert>
            </Modal>
        );
    }, [addLoading, addError, addData, called]);

    const renderRemoveStatus = useCallback(() => {
        if (removeLoading) return <Loading />;
        else if (removeError && called) return (
            <Modal>
                <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
            </Modal>
        );
    }, [removeLoading, removeError, called]);

    const renderWaterStatus = useCallback(() => {
        if (waterLoading) return <Loading />;
        else if (waterError && called) return (
            <Modal>
                <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
            </Modal>
        );
    }, [waterLoading, waterError, called]);

    const renderButton = useCallback(() => {
        if (cache) return (
            <Button onClick={handleAddPlant} style={buttonStyles} variant="contained" color="primary">Add to my garden</Button>
        )
        else return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button onClick={handleWaterPlant} variant="contained" color="primary">Water</Button>
                <Button style={{ marginTop: '10px' }} onClick={handleRemovePlant} variant="contained" color="secondary">Remove from my garden</Button>
            </div>
        )
    }, [cache, handleAddPlant, handleRemovePlant, handleWaterPlant]); 

    const renderInfo = useCallback(() => {
        return (
            <>
                {desc ? <PlantSectionInfo info="Description"> {desc} </PlantSectionInfo> : null}
                <PlantSectionInfo info="Watering"> Per {watering}h </PlantSectionInfo>
                {light ? <PlantSectionInfo info="Light"> {light} </PlantSectionInfo> : null}
                {watered ? <PlantSectionInfo info="Last watered"> {lastWatered} </PlantSectionInfo> : null}
                {irrigation ? 
                    <>
                        <PlantSectionInfo info="Irrigation's rate"> {Number(irrigationRate).toFixed(2)}% </PlantSectionInfo>
                        <div style={{ height: '8px', background: color7, borderRadius: '5px', margin: '0 0 30px 0' }}>
                            <motion.div animate={{ width: `${irrigationRate}%`, transition: { type: 'tween', duration: 1, ease: 'linear' } }} 
                            style={{ background: color6, height: 'inherit', width: `${irrigationRate}%`, borderRadius: 'inherit' }}></motion.div>
                        </div>
                    </>
                : null}
            </>
        )
    }, [desc, irrigation, irrigationRate, lastWatered, light, watered, watering]);

    return { renderAddStatus, renderButton, renderInfo, renderRemoveStatus, renderWaterStatus, wrapDown, setWrapDown }
}

export default useAddPlant;
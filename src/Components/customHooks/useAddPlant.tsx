import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button/Button';

import { ADD_PLANT, REMOVE_PLANT, WATER_PLANT } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import Alert from '@material-ui/lab/Alert';
import ERRORS from '../../ERRORS';
import PlantsCacheContext from '../../context/plantsCacheContext';
import buttonStyles from '../../tsStyleSettings/buttonStyles';
import PlantSectionInfo from '../Plants/PlantsLayout/PlantSectionInfo/PlantSectionInfo';
import { color6, color7 } from '../../tsStyleSettings/colors';

type Function = (name : string, desc : string, watering : number, light : string, watered : string | null, irrigation : string | null) => {
    renderAddStatus : () => JSX.Element | undefined,
    renderButton : () => JSX.Element | undefined,
    renderInfo : () => JSX.Element | undefined,
    renderRemoveStatus : () => JSX.Element | undefined,
    renderWaterStatus : () => JSX.Element | undefined
}

const useAddPlant : Function = (name, desc, watering, light, watered, irrigation) => {

    const [addPlant, { loading: addLoading, error: addError, data: addData }] = useMutation(ADD_PLANT, { onError: () => {} });
    const [removePlant, { loading: removeLoading, error: removeError, data: removeData }] = useMutation(REMOVE_PLANT);
    const [waterPlant, { loading: waterLoading, error: waterError, data: waterData }] = useMutation(WATER_PLANT);
    const cache = useContext(PlantsCacheContext);

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

    const handleRemovePlant = (e : any) => {
        e.stopPropagation();
        removePlant({
            variables: {
                name
            }
        });
    }

    const handleWaterPlant = (e : any) => {
        e.stopPropagation();
        waterPlant({
            variables: {
                name
            }
        });
    }

    const renderAddStatus = () => {
        if (addLoading) return <Loading />;
        else if (addError) {
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
        else if (addData) return (
            <Modal>
                <Alert severity='success'> Plant has been added to your garden successfully. </Alert>
            </Modal>
        );
    }

    const renderRemoveStatus = () => {
        if (removeLoading) return <Loading />;
        else if (removeError) return (
            <Modal>
                <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
            </Modal>
        );
        else if (removeData) return (
            <Modal>
                <Alert severity='success'> Plant has been removed from your garden successfully. </Alert>
            </Modal>
        );
    }

    const renderWaterStatus = () => {
        if (waterLoading) return <Loading />;
        else if (waterError) return (
            <Modal>
                <Alert severity='error'> Unable to perform action. Please try again later. </Alert>
            </Modal>
        );
        else if (waterData) return (
            <Modal>
                <Alert severity='success'> Plant has been added to your garden successfully. </Alert>
            </Modal>
        );
    }

    const renderButton = () => {
        if (cache) return (
            <Button onClick={handleAddPlant} style={buttonStyles} variant="contained" color="primary">Add to my garden</Button>
        )
        else return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button onClick={handleWaterPlant} variant="contained" color="primary">Water</Button>
                <Button style={{ marginTop: '10px' }} onClick={handleRemovePlant} variant="contained" color="secondary">Remove from my garden</Button>
            </div>
        )
    }

    const renderInfo = () => {
        return (
            <>
                <PlantSectionInfo info="Description"> {desc} </PlantSectionInfo>
                <PlantSectionInfo info="Watering"> Per {watering}h </PlantSectionInfo>
                <PlantSectionInfo info="Light"> {light} </PlantSectionInfo>
                {watered ? <PlantSectionInfo info="Last watered"> {watered} </PlantSectionInfo> : null}
                {irrigation ? 
                    <>
                        <PlantSectionInfo info="Irrigation's rate"> {irrigation}% </PlantSectionInfo>
                        <div style={{ height: '8px', background: color7, borderRadius: '5px', margin: '0 0 30px 0' }}>
                            <div style={{ background: color6, height: 'inherit', width: `${irrigation}%`, borderRadius: 'inherit' }}></div>
                        </div>
                    </>
                : null}
            </>
        )
    }

    return { renderAddStatus, renderButton, renderInfo, renderRemoveStatus, renderWaterStatus };
}

export default useAddPlant;
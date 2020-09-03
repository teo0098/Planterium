import React, { memo, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { AnimatePresence, motion } from 'framer-motion';

import CustomPlantStyles from './CustomPlant.module.scss';
import buttonStyles from '../../../../tsStyleSettings/buttonStyles';
import useCustomPlant from '../../../customHooks/useCustomPlant';
import PlantName from '../../../Inputs/PlantName/PlantName';
import PlantDesc from '../../../Inputs/PlantDesc/PlantDesc';
import PlantWatering from '../../../Inputs/PlantWatering/PlantWatering';
import PlantLight from '../../../Inputs/PlantLight/PlantLight';
import useLoginTab from '../../../customHooks/useLoginTab';

const CustomPlant : React.FC = () => {

    const { menu, setMenu, ref } = useLoginTab();
    const { handleOnSubmit, renderDiv } = useCustomPlant(menu);
    const decorator = useMemo(() => createDecorator(), []);

    return (
        <div className={CustomPlantStyles.CustomPlant}>
            <Button onClick={() => setMenu(!menu)} style={{ ...buttonStyles, zIndex: menu ? 1150 : 900 }} variant="contained" color="primary">
                {menu ? 'Close tab' : 'Add custom plant'}
            </Button>
            <AnimatePresence>
                {menu && (
                    <>
                        <Form onSubmit={handleOnSubmit} decorators={[decorator]}>
                            {({ handleSubmit }) =>
                                <motion.form initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: '0' }} 
                                exit={{ opacity: 0, transition: { duration: 0.3 } }} 
                                ref={ref} onSubmit={handleSubmit} className={CustomPlantStyles.CustomPlant__form}>
                                    <div className={CustomPlantStyles.CustomPlant__inputs}>
                                        <PlantName />
                                        <PlantWatering />
                                        <PlantLight />
                                    </div>
                                    <div className={CustomPlantStyles.CustomPlant__plantDesc}>
                                        <PlantDesc />
                                    </div>
                                    {renderDiv()}
                                    <Button style={{ ...buttonStyles, marginTop: '10px', alignSelf: 'center' }} type="submit" variant="contained" color="primary">Add</Button>
                                </motion.form>
                            }
                        </Form>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }} 
                        className={CustomPlantStyles.CustomPlant__div}></motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default memo(CustomPlant);
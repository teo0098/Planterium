import { PlantType } from '../../customHooks/usePlants';

export default interface PlantsLayoutProps {
    setSkip : React.Dispatch<React.SetStateAction<number>>;
    plants : Array<PlantType>;
    loading : boolean;
}
import { PlantType } from '../../customHooks/usePlants';

export default interface PlantsLayoutProps {
    skip : number;
    setSkip : React.Dispatch<React.SetStateAction<number>>;
    quantity : number,
    plants : Array<PlantType>;
    loading : boolean;
}
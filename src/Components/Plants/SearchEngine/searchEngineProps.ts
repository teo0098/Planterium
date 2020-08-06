export default interface SearchEngineProps {
    setPlantName : React.Dispatch<React.SetStateAction<string>>;
    setSkip : React.Dispatch<React.SetStateAction<number>>;
    setSearched : React.Dispatch<React.SetStateAction<boolean>>;
}
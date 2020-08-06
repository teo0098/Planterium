import React from 'react';
import TextField from '@material-ui/core/TextField';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import SearchEngineProps from './searchEngineProps';

const SearchEngine : React.FC<SearchEngineProps> = ({ setPlantName, setSkip }) => (
    <div>
        <TextField 
        inputProps={{ maxLength: 30 }}
        onChange={e => {
            setSkip(1);
            setPlantName(e.target.value);
        }}
        style={inputStyles} label="Search for plants..." />
    </div>
)

export default SearchEngine;
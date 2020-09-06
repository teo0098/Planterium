import React from 'react';
import TextField from '@material-ui/core/TextField';

import inputStyles from '../../../tsStyleSettings/inputStyles';
import SearchEngineProps from './searchEngineProps';

const SearchEngine : React.FC<SearchEngineProps> = ({ setSearchName, setSkip }) => (
    <div>
        <TextField 
        inputProps={{ maxLength: 30 }}
        spellCheck={false}
        onChange={e => {
            setSkip(1);
            setSearchName(e.target.value);
        }}
        style={inputStyles} label="Search for plants..." />
    </div>
)

export default SearchEngine;
import React, { useState, useEffect } from 'react';
import NotFoundIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import NotFoundStyles from './NotFound.module.scss';

const NotFound : React.FC = ({ children }) => {

    const [launch, setLaunch] = useState<boolean>(false);

    useEffect(() => setLaunch(true), [launch]);

    return (
        launch ?
            <div className={NotFoundStyles.NotFound}>
                <NotFoundIcon style={{ fontSize: '70px' }} />
                <h3> {children} </h3>
            </div>
        : null
    )
} 

export default NotFound;
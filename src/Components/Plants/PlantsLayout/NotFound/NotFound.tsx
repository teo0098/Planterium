import React from 'react';
import NotFoundIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import NotFoundStyles from './NotFound.module.scss';

const NotFound : React.FC = ({ children }) => (
    <div className={NotFoundStyles.NotFound}>
        <NotFoundIcon style={{ fontSize: '70px' }} />
        <h3> {children} </h3>
    </div>
)

export default NotFound;
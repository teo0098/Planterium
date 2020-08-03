import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import LoadingStyles from './Loading.module.scss';

const Loading : React.FC = () => (
    <div className={LoadingStyles.Loading}>
        <LinearProgress style={{ height: '7px' }} />
    </div>
)

export default Loading;
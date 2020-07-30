import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import LoadingStyles from './Loading.module.scss';

const Loading : React.FC = () => (
    <div className={LoadingStyles.Loading}>
        <LinearProgress />
    </div>
)

export default Loading;
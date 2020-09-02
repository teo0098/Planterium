import React, { memo } from 'react';
import Flower from '@material-ui/icons/LocalFloristOutlined';

import LogoStyles from './Logo.module.scss';

const Logo : React.FC = () => (
    <div className={LogoStyles.Logo}>
        <Flower style={{ fontSize: '30px' }} />
        <h2 className={LogoStyles.Logo__h2}>Planterium</h2>
    </div>
)

export default memo(Logo);
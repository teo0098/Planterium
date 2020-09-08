import React, { memo } from 'react';
import Flower from '@material-ui/icons/LocalFloristOutlined';
import { Link } from 'react-router-dom';

import LogoStyles from './Logo.module.scss';

const Logo : React.FC = () => (
    <Link className={LogoStyles.Logo} to='/'>
        <Flower style={{ fontSize: '30px' }} />
        <h2 className={LogoStyles.Logo__h2}>Planterium</h2>
    </Link>
)

export default memo(Logo);
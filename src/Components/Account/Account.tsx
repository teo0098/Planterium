import React from 'react';
import { useQuery } from '@apollo/client';

import AccountStyles from './Account.module.scss';
import Navigation from '../Navigation/Navigation';
import { IS_AUTH } from '../../graphqlQueries';

const Account : React.FC = () => {

    const { loading, error, data } = useQuery(IS_AUTH);

    return (
        <>
            <Navigation variant={2} />
            {error ? "ERROR" : "SUCCESS"}
        </>
    )
}

export default Account;
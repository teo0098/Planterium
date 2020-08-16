import React from 'react';
import { useQuery } from '@apollo/client';

import AccountStyles from './Account.module.scss';
import Navigation from '../Navigation/Navigation';
import { IS_AUTH } from '../../graphqlQueries';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const Account : React.FC = () => {

    const { loading, error, data } = useQuery(IS_AUTH, { fetchPolicy: 'no-cache' });

    return (
        <>
            <Navigation variant={2} />
            {loading ? <Loading /> : null}
            {(!loading && data.isAuth === false) || error ? <Error> Unauthorized access. Please log in. </Error> : null}
        </>
    )
}

export default Account;
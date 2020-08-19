import React from 'react';
import { useQuery } from '@apollo/client';

import Navigation from '../Navigation/Navigation';
import { IS_AUTH } from '../../graphqlQueries';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Plants from '../Plants/Plants';
import { PLANTS } from '../../graphqlQueries';

const Account : React.FC = () => {

    const { loading, error, data } = useQuery(IS_AUTH, { fetchPolicy: 'no-cache' });

    return (
        <>
            {loading || error || (data && !data.isAuth) ? <Navigation variant={2} /> : null}
            {loading ? <Loading /> : null}
            {!loading && (!data.isAuth || error) ? <Error> Unauthorized access. Please log in. </Error> : null}
            {!loading && data && data.isAuth ? <Plants query={PLANTS} /> : null}
        </>
    )
}

export default Account;
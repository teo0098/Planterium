import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';

import { LOGOUT } from '../../graphqlMutations';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';

type Function = () => { 
    menu : boolean, 
    setMenu : React.Dispatch<React.SetStateAction<boolean>>, 
    ref : any, 
    logout : () => void,
    renderStatus : () => JSX.Element | undefined
};

const useLoginTab : Function = () => {

    const [menu, setMenu] = useState<boolean>(false);
    const ref : any = useRef<null | HTMLDivElement>(null);
    const [logout, { loading, data }] = useMutation(LOGOUT);

    useEffect(() => {
        const hideMenu = (e : any) => menu && !ref.current.contains(e.target) ? setMenu(false) : null;
        window.addEventListener('click', hideMenu);
        return () => window.removeEventListener('click', hideMenu);
    }, [menu]);

    const renderStatus = () => {
        if (loading) return <Loading />;
        else if (data) return <Redirect to='/login' />;
    }
    
    return { menu, setMenu, ref, logout, renderStatus };
}

export default useLoginTab;
import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress'

import { LOGOUT } from '../../graphqlMutations';
import { Redirect } from 'react-router-dom';

type Function = () => { 
    menu : boolean, 
    setMenu : React.Dispatch<React.SetStateAction<boolean>>, 
    ref : any, 
    signOut : (e : any) => void,
    renderStatus : () => JSX.Element | string,
    redirect : () => JSX.Element | null
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

    const signOut = (e : any) => {
        e.stopPropagation();
        logout();
    }

    const renderStatus = () => loading ? <CircularProgress /> : 'Log out';

    const redirect = () => data ? <Redirect to='/login' /> : null;
    
    return { menu, setMenu, ref, signOut, renderStatus, redirect };
}

export default useLoginTab;
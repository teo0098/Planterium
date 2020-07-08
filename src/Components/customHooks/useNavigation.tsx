import { useState } from 'react';

type Function = () => { menuOn : boolean, setMenu : () => void }

const useNavigation : Function = () => {

    const [menuOn, setMenuOn] = useState<boolean>(false);

    const setMenu = () => setMenuOn(prevstate => !prevstate);

    return { menuOn, setMenu }
}

export default useNavigation;
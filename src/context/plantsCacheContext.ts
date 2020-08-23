import { createContext } from 'react';

const plantsCacheContext = createContext<boolean | undefined>(undefined);

export default plantsCacheContext;
import React from 'react';

import Navigation from '../Navigation/Navigation';
import { ReactComponent as SVG404 } from './404.svg';
import Page404Styles from './Page404.module.scss';

const Page404 : React.FC = () => (
    <>
        <Navigation variant={2} />
        <div className={Page404Styles.Page404}>
            <SVG404 />
            <p className={Page404Styles.Page404__p}>
                Icons made by <a rel="noopener noreferrer" className={Page404Styles.Page404__a} target="_blank" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a rel="noopener noreferrer" className={Page404Styles.Page404__a} target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
        </div>
    </>
)

export default Page404;
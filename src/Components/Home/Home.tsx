import React from 'react';

import Intro from './Intro/Intro';
import Features from './Features/Features';
import Navigation from '../Navigation/Navigation';

const Home : React.FC = () => (
    <React.Fragment>
        <Navigation variant={1} />
        <Intro />
        <Features />
    </React.Fragment>
)

export default Home;
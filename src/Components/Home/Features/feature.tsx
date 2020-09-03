import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import WaterIcon from '@material-ui/icons/Opacity';
import EarthIcon from '@material-ui/icons/Public';

export type FeatureType = { desc : string, icon : JSX.Element };

export const features : Array<FeatureType> = [
    {
        desc: "Keep all of your garden's plants in one place so you can better deal with them.",
        icon: <PlaceIcon style={{ fontSize: '60px' }} />
    },
    {
        desc: "Stop worrying about the date of watering your plants. We will be tracking that so you can clearly see what is your plant's irrigation's rate.",
        icon: <WaterIcon style={{ fontSize: '60px' }} />
    },
    {
        desc: "Create account for FREE and get started managing your online garden from any place on earth.",
        icon: <EarthIcon style={{ fontSize: '60px' }} />
    }
]
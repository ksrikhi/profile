import React from 'react';
import { Box } from 'rebass';

const ProfileImage = ({ label }) => {
    return <Box  width={['100%', '50%']}
        height='50%'
    >
        {label
        }</Box>
};


export default ProfileImage;
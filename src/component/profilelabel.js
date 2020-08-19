import React from 'react';
import { Box } from 'rebass';

const ProfileLabel = ({ label }) => {
    return <Box width='90px'
        fontSize='12px'
        fontWeight='700'
        lineHeight='1.6'
        style={{ textTransform: "uppercase" }}
    >
        {label}</Box>
};


export default ProfileLabel;
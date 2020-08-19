import React from 'react';
import { Box } from 'rebass';

const LabelDetail = ({ label }) => {
    return <Box
        fontSize='12px'
        lineHeight='1.6'
        opacity='0.8'
    >
        {label
        }</Box>
};


export default LabelDetail;
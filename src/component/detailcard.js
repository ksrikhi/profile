import React from 'react';
import {Box } from 'rebass';

const DetailCard= ({ children }) => {
    return (
        <Box
        PaddingTop= {'5px'}
        marginBottom={'0px'}
        opacity={'0.8'}
        fontSize={['14px','14px','16px']}
        lineHeight={['1.4','1.4','1.56']}
        >
       {children}
      </Box>
    );
};

 
export default DetailCard;
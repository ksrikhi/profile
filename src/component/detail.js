import React from 'react';
import {Box } from 'rebass';

const Detail= ({ children }) => {
    return (
        <Box
        PaddingTop= {'5px'}
        marginBottom={'20px'}
        opacity={'0.8'}
        fontSize={'14px'}
        lineHeight={'1.4'}
        marginTop={'25px'}
        >
       {children}
      </Box>
    );
};

 
export default Detail;
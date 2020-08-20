import React from 'react';
import { Heading } from 'rebass';

const H4 = ({ children }) => {
    return (
        <Heading
        fontSize={ '18px' }
        lineHeight={'1.55'}
        fontWeight={'700'}
        fontFamily= 'sans-serif' 
        >
       {children}
      </Heading>
    );
};

 
export default H4;
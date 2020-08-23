import React from 'react';
import { Heading } from 'rebass';

const H4 = ({ children, ...props }) => {
    return (
        <Heading
        as="h4"
        {...props}
        fontSize={'18px'}
        lineHeight={'1.55'}
        fontWeight={'700'}
        >
       {children}
      </Heading>
    );
};

 
export default H4;
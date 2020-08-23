import React from 'react';
import { Heading } from 'rebass';

const H2 = ({ children }) => {
    return (
        <Heading
        fontSize={[ '1.5em' ]}
        lineHeight={['1.1','1.4','1.5']}
        fontWeight={['500','500','700']}
        fontFamily= 'sans-serif' 
        style={{borderBottom:'1px solid #e3e3e3'}}
        >
       {children}
      </Heading>
    );
};

 
export default H2;
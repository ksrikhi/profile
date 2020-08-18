import React from 'react';
import { Heading } from 'rebass';

const H1 = ({ children }) => {
    return (
        <Heading
        fontSize={[ '30px','30px','36px' ]}
        lineHeight={['1.1px','1.1px','1.25px']}
        fontWeight={['500','500','700']}
        fontFamily= 'sans-serif'
        >
       {children}
      </Heading>
    );
};

 
export default H1;
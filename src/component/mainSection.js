import React from 'react';
import Section from './section';
import { Box } from 'rebass';

const MainSection = ({ children }) => {
    return (
        <Section>
            <Box width={[1, 1, 1, '64em']} px={'20px'} mx={'auto'}>
              {children}
            </Box>
       </Section>
    );
};

 
export default MainSection;
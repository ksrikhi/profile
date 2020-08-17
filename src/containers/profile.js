import React from 'react';
import MainSection from '../component/mainSection';
import { Box, Flex } from 'rebass';

const Profile = () => {
    return (
        <MainSection>
            <Flex flexDirection={['column', 'column', 'row']}>
                <Box width={[1, 1, 1/2, 1/2]} order={[2, 2, 1, 1]}>
                <h1> I am Kanchan Sharma</h1>
            <p>I am a Web Developer located in Hartford, Connecticut. I currently work as a part time Remote Junior Web Developer for Coolor, located in Las Vegas. I am looking to take on more work and to increase my skills as a Web Developer.</p>
                </Box>
                <Box width={[1, 1, 1/2, 1/2]} order={[1, 1, 2, 2]}>
                    <h1>yjhjhjh</h1>
                </Box>
            </Flex>
            
       </MainSection>
    );
};

 
export default Profile;
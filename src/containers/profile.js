import React from 'react';
import MainSection from '../component/mainSection';
import { Box, Flex } from 'rebass';
import H1 from '../component/h1';
import Detail from '../component/detail';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin';
import {Behance} from '@styled-icons/entypo-social/Behance';


const Profile = (props) => {
    return (
        <MainSection>
            <Flex flexDirection={['column', 'column', 'row']}>
                <Box width={[1, 1, 1 / 2, 1 / 2]} order={[2, 2, 1, 1]}>
                    <H1>{props.data.name} </H1>
                    <Detail>{props.data.detail}</Detail>
                    <Flex>
                        <Box width='90px'>Phone</Box>
                        <Box>{props.data.phone}</Box>
                    </Flex>
                    <Flex>
                        <Box width={1 / 4}>Address</Box>
                        <Box>{props.data.address}</Box>
                    </Flex>
                    <Flex>
                        <Box width={1 / 4}>Email</Box>
                        <Box>{props.data.email}</Box>
                    </Flex>
                    <Flex>
                        <Box width={1 / 4}>Social</Box>
                          <Facebook size="14px" />
                          <Twitter />
                          <Instagram />
                          <Linkedin />
                          <Behance />
                    </Flex>
                     </Box>

                <Box width={[1, 1, 1 / 2, 1 / 2]} order={[1, 1, 2, 2]}>
                    <h1>yjhjhjh</h1>
                </Box>
            </Flex>

        </MainSection>
    );
};


export default Profile;
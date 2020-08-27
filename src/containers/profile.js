import React, { useState } from 'react';
import MainSection from '../component/mainSection';
import { Box, Flex, Image } from 'rebass';
import H1 from '../component/h1';
import Detail from '../component/detail';
import Icon from '../component/socialicons';
import Button from '../component/btn.js';
import LabelDetail from '../component/labeldetail';
import ProfileLabel from '../component/profilelabel';
import Modalcard from '../component/contentModelCard';
import profileImage from '../images/img.jpg';

const Profile = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MainSection>
            <Flex flexDirection={['column', 'column', 'row']}>
                <Box width={[1, 1, 1 / 2, 1 / 2]} order={[2, 2, 1, 1]}>
                    <H1>{props.data.name} </H1>
                    <Detail>{props.data.detail}</Detail>
                    <Flex>
                        <ProfileLabel label="Phone" />
                        <LabelDetail label={props.data.phone}> </LabelDetail>
                    </Flex>
                    <Flex>
                        <ProfileLabel label="Address" />
                        <LabelDetail label={props.data.address}> </LabelDetail>
                    </Flex>
                    <Flex>
                        <ProfileLabel label="Email" />
                        <LabelDetail label={props.data.email}> </LabelDetail>
                    </Flex>
                    <Flex>
                        <ProfileLabel label="Social" />
                        <Icon />
                    </Flex>
                    <Button primary onClick={() => setIsOpen(true)}>CONTECT ME</Button>
                    <a href='assest/Kanchan Resume.pdf' download style={{ color: 'inherit', textTransform: 'none' }}>
                        <Button> DOWNLOAD CV</Button> </a>
                </Box>

                <Box width={[1, 1, 1 / 2, 1 / 2]} order={[1, 1, 2, 2]}>
                    <Image src={profileImage} alt="profile image" mb={['20px', '20px', 0]} />
                </Box>
            </Flex>
           {isOpen && <Modalcard isClose={setIsOpen}/>}
        </MainSection>
    );
};


export default Profile;
import React from 'react';
import MainSection from '../component/mainSection';
import { Flex } from 'rebass';
import H2 from '../component/h2';
import LearningSkill from '../component/edu';

const Experience = ({ data }) => {
    return (
        <MainSection>
            <H2>Experience</H2>
            <Flex flexWrap='wrap' mx={-2}>
                {data.map(skill => (
                    <LearningSkill data={skill} />
                ))}
            </Flex>
        </MainSection>
    );
};

export default Experience;
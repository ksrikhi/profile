import React from 'react';
import MainSection from '../component/mainSection';
import { Flex } from 'rebass';
import H2 from '../component/h2';
import LearningSkill from '../component/edu';

const Education = ({ data }) => {
    return (
        <MainSection>
            <H2>Education</H2>
            <Flex flexWrap='wrap' mx={-2}>
                {data.map(skill => (
                    <LearningSkill key={skill.title} data={skill} />
                ))}
            </Flex>
        </MainSection>
    );
};

export default  Education;
import React from 'react';
import MainSection from '../component/mainSection';
import { Box, Flex } from 'rebass';
import H2 from '../component/h2';
import SkillSet from '../component/skillset';

const Skills = ({ data }) => {
    return (
        <MainSection>
            <H2>{data.title}</H2>
            <Flex flexDirection={['column', 'column' ,'row']} flexWrap='wrap' mx={-2}>
                {data.skillSet.map(skill => (
                    <SkillSet data={skill} />
                ))}
            </Flex>
        </MainSection>
    );
};

export default Skills;
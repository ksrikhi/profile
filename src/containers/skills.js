import React from 'react';
import MainSection from '../component/mainSection';
import { Flex } from 'rebass';
import H2 from '../component/h2';
import SkillSet from '../component/skillset';

const Skills = ({ data }) => {
    return (
        <MainSection>
            <H2>skill</H2>
            <Flex flexDirection={['column', 'column' ,'row']} flexWrap='wrap' mx={-2}>
                {data.map(skill => (
                    <SkillSet data={skill} />
                ))}
            </Flex>
        </MainSection>
    );
};

export default Skills;
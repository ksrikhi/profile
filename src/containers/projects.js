import React from 'react';
import MainSection from '../component/mainSection';
import {Flex } from 'rebass';
import H2 from '../component/h2';
import ProjectDetail from '../component/projectcard';

const Project = ({ data }) => {
    return (
        <MainSection>
            <H2>Projects</H2>
            <Flex flexDirection={['column', 'column' ,'row']} flexWrap='wrap' mx={-2}>
                {data.map(project => (
                    <ProjectDetail data={project} />
                ))}
            </Flex>
        </MainSection>
    );
};


export default Project;
import React from 'react';
import { Box, Image } from 'rebass';
import DetailCard from './detailcard';
import ProjectImg from './projectimg';

const ProjectDetail = ({ data: { date, image, title } }) => {
    return (
        <Box width={[1,1/2,1/2,1/3]} px={2}>
            <Box height="200px">
                <ProjectImg src= {image} alt="profile image" height="100%" />
            </Box>
            <DetailCard>{title}</DetailCard>
            <DetailCard>{date}</DetailCard>
        </Box>
    );
};


export default ProjectDetail;
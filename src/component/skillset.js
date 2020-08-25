import React from 'react';
import { Box } from 'rebass';
import H4 from './h4';
import DetailCard from './detailCard';

const SkillSet = ({ data: { title, details } }) => {
    return (
        <Box width={[1, 1, 1 / 2, 1 / 2]} px={2} py={2}>
            <H4>{title}</H4>
            <DetailCard>{details}</DetailCard>
        </Box>
    );
};


export default SkillSet;
import React from 'react';
import { Box, Flex } from 'rebass';
import H4 from './h4';
import DetailCard from './detailCard';

const LearningSkill = ({ data: { title, details, subtitle, date } }) => {
    return (
        <Box  data-testid='learning-skill' width={[1]} px={2} py={2}>
            <Flex flexDirection={['column']}>
                <Flex>
                    <H4 display="inline-block" mr="10px">{title}</H4>
                    <DetailCard>{subtitle}</DetailCard>
                </Flex>
                <Box>
                    <DetailCard>{date}</DetailCard>
                    <DetailCard>{details}</DetailCard>
                </Box>
            </Flex>
        </Box>
    );
};


export default LearningSkill;
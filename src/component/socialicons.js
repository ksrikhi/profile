import React from 'react';
import { Box } from 'rebass';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin';
import {Behance} from '@styled-icons/entypo-social/Behance';


const Icons = ({ children }) => {
    return (
      <Box>
            <Facebook size="14px" opacity='1.0' style={{paddingRight: '5px'}}  />
            <Twitter size="14px" opacity='1.0'  style={{paddingRight: '5px'}} />
            <Instagram size="14px" opacity='1.0' style={{paddingRight: '5px'}} />
            <Linkedin size="14px" opacity='1.0' style={{paddingRight: '5px'}} />
            <Behance size="14px" opacity='1.0'  />
        </Box>

);
};

 
export default Icons;
import styled from 'styled-components';
import { Image } from 'rebass';

const ProjectImg = styled(Image)`

margin-bottom: 20px;
border-radius: 2px;
font-size: 12px;

&:hover { 
    box-shadow: 10px 10px 20px rgba(51, 51, 255, 0.2);
  }

`;

export default ProjectImg;
import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "#3333ff" : "#efefef"};
color: ${props => props.primary ? "white" : "black"};

margin-top: 20px;   
margin-right: 30px;
font-size: 12px;
font-weight: 700;
line-height: 1.66;
text-transform: uppercase;
font-weight: 700;
min-width: 170px;
text-align: center;
padding: 15px;
display: inline-block;
border: none;
border-radius: 2px;
&:hover { 
    box-shadow: 10px 10px 20px rgba(51, 51, 255, 0.2);
  };
  &:focus {
    outline: none;
  }

`;

export default Button;
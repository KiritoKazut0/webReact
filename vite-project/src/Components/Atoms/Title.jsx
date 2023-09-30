import styled from "styled-components";

const Title = styled.h2`
    display: block;
    font-family: 'Playfair Display', serif;
    font-size:${props => props.primary ? "28px": "23px" } ;
    color: ${props => props.primary ? "#02ffcc": "white" };
    margin: ${props => props.primary ? "10px": "20px" } ;
    position:  ${props => props.primary ? "absolute": "" } ;
    

`;

export default Title;
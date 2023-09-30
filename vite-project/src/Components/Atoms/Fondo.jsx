import styled from "styled-components";
import fondo from '../../assets/fondo.jpg'

const FondoContainer = styled.div `


background: ${props => (props.primary ? "": "#120F28")};
width: 100%;
height: auto;
background-repeat: no-repeat;
background-size: cover;
border-bottom: 2px solid #ffffff;


`;

export default FondoContainer;
/* background: url(${fondo}) center ; */
// background: url(${fondo}); 
// linear-gradient(90deg, #e41459, transparent);
// height: ${props => props.primary ? "100vh": "98vh" };
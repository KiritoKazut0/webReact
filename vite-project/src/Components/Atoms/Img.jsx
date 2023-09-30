import styled from "styled-components";

function Img({ src, alt, primary, secondary, tercery, quatiary }) {
  return <StyledImage src={src} alt={alt} primary={primary} secondary={secondary} tercery ={tercery} quatiary={quatiary} />;
}

const StyledImage = styled.img`
  width: ${props => (props.primary ? "27%" : props.secondary ? "23%" : props.tercery? "100%": props.quatiary? "100%":  "12%")};
  height: ${props => (props.primary ? "60vh" : props.secondary ? "50vh" : props.tercery? "55vh": props.quatiary? "45vh": "13vh" )};
  padding-left: ${props => (props.primary ? "10px": props.secondary? "0px": "0px")};
  box-shadow: ${props => (props.primary ? "10px 10px 20px rgba(57, 86, 148, 0.833)": props.secondary?  "none" : "none")};
  object-fit: ${props => props.tercery? "cover": ""};
  margin-bottom: ${props => props.tercery? "0px": "25px"};
  
`;




export default Img;


/* ; */


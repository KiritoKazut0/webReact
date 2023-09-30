import styled from "styled-components";

const Sections = styled.section`
    width: ${props => props.primary ? "80%" : "79%"};
    height: auto;
  
    display: flex;
    padding:  ${props => props.primary ? "0%  10%" : " 23vh 0vh 15% 15% " } ;
    flex-wrap: ${props => props.primary ? "wrap" : "none"};
    justify-content:  ${props => props.primary ? "space-between" : "none" };

    
    
`;

//

export default Sections
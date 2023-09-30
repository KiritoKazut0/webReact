import Img from "../Atoms/Img";
import Header from "../Atoms/Header";
import Title from "../Atoms/Title";
import FondoContainer from "../Atoms/Fondo";
import Sections from "../Atoms/Sections";
import GaleriaImg from "../../Store/Galeria";

function Galeria (){
    return (
        <>
        <FondoContainer>
        <Header> <Title> {GaleriaImg.Title}</Title> </Header>
        <Sections primary> 
            {
               GaleriaImg.img.map (img =>{
                return <Img src={img} alt="Descripción" secondary={true} />

               }) 
            }
         </Sections>

        </FondoContainer>
        </>
        );
}



export default Galeria;
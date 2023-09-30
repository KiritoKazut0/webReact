import Title from "../Atoms/Title";
import Img from "../Atoms/Img";
import Article from "../Atoms/Article";
import Parrafo from "../Atoms/Parrafo";
import Information from "../../Store/Informations";
import Sections from "../Atoms/Sections";
import FondoContainer from "../Atoms/Fondo";
function Secciones (){
    return (
       <>

            {
                Information.namesAnime.map (namesAnime =>{
                    return <FondoContainer>
                         <Sections>  
                        <Img src={namesAnime.img} alt="imageAnimes" primary></Img>
                        <Article>
                        <Title> {namesAnime.name} </Title>
                        <Parrafo> {namesAnime.date} </Parrafo>
                        
                        </Article>
                       
                    </Sections> 
                    </FondoContainer>
                })
            }

       </>
    );
}

export default Secciones;
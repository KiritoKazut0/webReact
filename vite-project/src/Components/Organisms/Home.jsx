import FondoContainer from "../Atoms/Fondo";
import Nav from "../Atoms/Nav";
import Secciones from "../Molecule/Secciones";
import Galeria from "../Molecule/Galeria";
import Cards from "../Molecule/Cards";
import PiePagina from "../Molecule/PiePagina";

function Home() {
    return (
        <FondoContainer>
            <Nav></Nav>
            <Secciones></Secciones>
            <Cards></Cards>
            <Galeria></Galeria>
            <PiePagina></PiePagina>
        </FondoContainer>
    );
}


export default Home;

{/* <FondoContainer primary>   </FondoContainer> */ }
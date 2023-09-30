import Img from "../Atoms/Img";
import Title from "../Atoms/Title";
import Sections from "../Atoms/Sections";
import Card from "../../Store/Cards";
import FondoContainer from "../Atoms/Fondo";
import Header from "../Atoms/Header";
import CardContainer from "../Atoms/CardContainer";
function Cards() {
    return (
        <>
            <FondoContainer>
                <Header> <Title> {Card.header} </Title> </Header>
                <Sections primary>
                    {Card.date.map(date => {
                        return <CardContainer>
                                <Img src={date.img} alt="Imagen"  quatiary={true} > </Img>
                                <Title>{date.title}</Title>
                        </CardContainer>
                    })}
                </Sections>

            </FondoContainer>

        </>
    );
}

export default Cards;
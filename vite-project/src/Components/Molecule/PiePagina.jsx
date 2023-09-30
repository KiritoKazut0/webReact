import React from "react";
import Footer from "../Atoms/Footer";
import Img from "../Atoms/Img";
import dateHeader from "../../Store/DateHader";
import Overlard from "../Atoms/Overlard";
import Title from "../Atoms/Title";

function PiePagina() {
    return (
      <>
        <Footer>
          <Title primary>{dateHeader.FooterTitle}</Title> 
          <Overlard />
          <Img src={dateHeader.ImgFooter} alt="Descripción" tercery={true} />
        </Footer>
      </>
    );
  }
export default PiePagina;


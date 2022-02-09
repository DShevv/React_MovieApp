import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailsTitle from "./detailsTitle/DetailsTitle";
import DetailsContent from "./detailsContent/DetailsContent";
import load from "../../assets/loading.svg";

const StyledDetails = styled.section`
  margin-top: 40px;
  margin-bottom: 156px;
`;

const Loader = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: 200px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 56px;
  height: 56px;
`;

function Details(props) {
  const params = useParams();
  
//<Loader>
//          <StyledImg src={load} alt="Загрузка"/>
//        </Loader> 

  return (
    <StyledDetails>
        <DetailsTitle />
        <DetailsContent />
    </StyledDetails>
  );
}

export default Details;

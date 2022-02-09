import React from "react";
import styled from "styled-components";
import DetailsRaiting from "../detailsRaiting/DetailsRaiting";


const StyledInfo = styled.section`

`;

const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #8E95A9;
`;


const Crit = styled.div`
  margin-top: 24px;
`;

const CritCaption = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #767E94;
`;

const CritValue = styled.div`
  margin-top: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #C3C8D4;
`;

function FilmInfo(props) {
  return (
    <StyledInfo>
      <Text>
        {props.data.overview}
      </Text>
      <Crit>
        <DetailsRaiting value={props.data.vote_average}/>
      </Crit>
      <Crit>
        <CritCaption>Тип</CritCaption>
        <CritValue>Фильм</CritValue>
      </Crit>
      <Crit>
        <CritCaption>Дата выхода</CritCaption>
        <CritValue>{props.data.release_date}</CritValue>
      </Crit>
      <Crit>
        <CritCaption>Продолжительность</CritCaption>
        <CritValue>{props.data.runtime} мин</CritValue>
      </Crit>
      <Crit>
        <CritCaption>Жанр</CritCaption>
        <CritValue>{props.data.genres.map((elem, index) => {
          if(index === 0) {
            return elem.name.charAt(0).toUpperCase() + elem.name.slice(1);
          } 
          else {
            return ` ${elem.name}`;
          }
        }).join()}</CritValue>
      </Crit>
    </StyledInfo>
  );
}

export default FilmInfo;

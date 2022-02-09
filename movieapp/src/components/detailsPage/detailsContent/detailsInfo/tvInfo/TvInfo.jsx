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

const CombinedCrit = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

const CritItem = styled.div`
  min-width: 228px;
`;

function TvInfo(props) {
  
  return (
    <StyledInfo>
       <StyledInfo>
      <Text>
        {props.data.overview}
      </Text>
      <Crit>
        <DetailsRaiting value={props.data.vote_average}/>
      </Crit>
      <CombinedCrit>
        <CritItem>
          <CritCaption>Тип</CritCaption>
          <CritValue>Сериал</CritValue>
        </CritItem>
        <CritItem>
          <CritCaption>Статус</CritCaption>
          <CritValue>{props.data.status === "Ended" ? "Завершён" : "Продолжается"}</CritValue>
        </CritItem>
      </CombinedCrit>
      <CombinedCrit>
        <CritItem>
          <CritCaption>Дата выхода</CritCaption>
          <CritValue>{props.data.first_air_date}</CritValue>
        </CritItem>
        <CritItem>
          <CritCaption>Дата закрытия</CritCaption>
          <CritValue>{props.data.last_air_date}</CritValue>
        </CritItem>
      </CombinedCrit>
      <CombinedCrit>
        <CritItem>
          <CritCaption>Кол-во сезонов</CritCaption>
          <CritValue>{props.data.number_of_seasons}</CritValue>
        </CritItem>
        <CritItem>
          <CritCaption>Кол-во серий</CritCaption>
          <CritValue>{props.data.number_of_episodes}</CritValue>
        </CritItem>
      </CombinedCrit>
      <Crit>
        <CritCaption>Продолжительность серии</CritCaption>
        <CritValue>{props.data.episode_run_time[0]} мин</CritValue>
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
    </StyledInfo>
  );
}

export default TvInfo;

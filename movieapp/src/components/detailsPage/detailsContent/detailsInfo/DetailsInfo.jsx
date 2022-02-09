import React from "react";
import styled from "styled-components";
import FilmInfo from "./filmInfo/FilmInfo";
import TvInfo from "./tvInfo/TvInfo";


const StyledInfo = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
`;


function DetailsInfo(props) {
  
  return (
    <StyledInfo>
      { props.code === "movie" ? <FilmInfo data={props.data}></FilmInfo> : <TvInfo data={props.data}></TvInfo>}
    </StyledInfo>
  );
}

export default DetailsInfo;

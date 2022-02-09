import React from "react";
import styled from "styled-components";
import FilmInfo from "./filmInfo/FilmInfo";


const StyledInfo = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
`;


function DetailsInfo(props) {
  
  return (
    <StyledInfo>
      { props.code === "movie" ? <FilmInfo data={props.data}></FilmInfo> : <div></div>}
    </StyledInfo>
  );
}

export default DetailsInfo;

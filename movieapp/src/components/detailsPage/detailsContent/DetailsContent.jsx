import React from "react";
import styled from "styled-components";
import DetailsInfo from "./detailsInfo/DetailsInfo";


const StyledContent = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0px 80px 156px 80px;  
`;

const Poster = styled.img`
  width: 480px;
  height: 720px;
  border-radius: 24px;
`;

function DetailsContent(props) {
  const img = `https://image.tmdb.org/t/p/original/${props.data.poster_path}`
  return (
    <StyledContent>
      <Poster src={img}/>
      <DetailsInfo code={props.code} data={props.data}/>
    </StyledContent>
  );
}

export default DetailsContent;

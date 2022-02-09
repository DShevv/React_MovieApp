import React from "react";
import styled from "styled-components";
import DetailsText from "./detailsText/DetailsText";

const StyledTitle = styled.section`
  position: relative;
  margin-top: 40px;
  margin-bottom: 8px;
`;

const Backgroud = styled.img`
  width: 1200px;
  height: 480px;
  border-radius: 40px;
  object-fit: cover;
`;

const Gradient = styled.div`
  position: relative;
  border-radius: 40px;
  width: 1200px;
  height: 480px;

  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%);
  }
`;

function DetailsTitle(props) {
  const img = `https://image.tmdb.org/t/p/original/${props.back}`
  return (
    <StyledTitle>
      <Gradient>
        <Backgroud src={img}/>
      </Gradient>
      <DetailsText page={props.page} title={props.title}/>
    </StyledTitle>
  );
}

export default DetailsTitle;

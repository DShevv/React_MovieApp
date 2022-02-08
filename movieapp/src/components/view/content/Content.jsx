import React from "react";
import styled from "styled-components";
import CardGrid from "./cardGrid/CardGrid";

const StyledContent = styled.div`
  margin-top: 48px;
`;

const SectionTitle = styled.section`
  margin-bottom: 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #767e94;
`;

function Content(props) {
  return (
    <StyledContent>
      <SectionTitle>Популярное</SectionTitle>
      <CardGrid data={props.data} name={props.name}/>
    </StyledContent>
  );
}

export default Content;

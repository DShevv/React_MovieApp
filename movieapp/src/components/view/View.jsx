import React from "react";
import { shows } from "../../assets/ShowList";
import Title from "./title/Title";
import Content from "./content/Content";
import styled from "styled-components";

const StyledView = styled.section`
  margin-top: 64px;
`;

function View(props) {
  return (
    <StyledView>
      <Title title={props.page} />
      <Content data={shows} />
    </StyledView>
  );
}

export default View;

import React from "react";
import styled from "styled-components";
import Card from "./card/Card";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;
`;

function CardGrid(props) {
  return (
    <StyledGrid>
      {props.data.map((item) => (
        <Card key={item.id} data={item}></Card>
      ))}
    </StyledGrid>
  );
}

export default CardGrid;

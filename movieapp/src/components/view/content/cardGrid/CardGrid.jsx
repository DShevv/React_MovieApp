import React from "react";
import styled from "styled-components";
import Card from "./card/Card";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 24px;
`;

function CardGrid(props) {
  return (
    <StyledGrid>
      {props.data.map((item) => (
        <Card key={item.id} data={item} name={props.name}></Card>
      ))}
    </StyledGrid>
  );
}

export default CardGrid;

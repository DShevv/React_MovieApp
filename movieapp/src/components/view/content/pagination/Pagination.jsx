import React from "react";
import styled from "styled-components";
import Button from "./button/Button";

const StyledPagination = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;

function Pagination(props) {
  return (
    <StyledPagination>
      <Button disabled={props.pageData.page > 1 && props.pageData.page < props.pageData.total ? false : true} content="Назад" setPage={props.dec}/>
      <Button content="Вперёд" setPage={props.inc}/>
    </StyledPagination>
  );
}

export default Pagination;

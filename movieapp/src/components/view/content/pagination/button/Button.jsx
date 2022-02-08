import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 122px;
  height: 56px;
  background: #7B6EF6;
  border: 2px solid #7B6EF6;
  border-radius: 12px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  outline: none;

  &:hover{
    cursor: pointer;
  }

  &:disabled{
    opacity: 0.4;
    cursor: default;
  }
`;

function Button(props) {
  return (
    <StyledButton disabled={props.disabled} onClick={props.setPage}>
      {props.content}
    </StyledButton>
  );
}

export default Button;

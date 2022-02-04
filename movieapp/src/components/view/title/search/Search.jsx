import React from "react";
import styled from "styled-components";
import icon from "../../../../assets/search-normal.svg";

const StyledSearch = styled.input.attrs({ type: "text" })`
  margin-top: 24px;
  width: 344px;
  height: 64px;
  padding-left: 56px;
  border: 1px solid #323b54;
  border-radius: 12px;
  background: transparent;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: 18px 22px;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #767e94;

  &::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #475069;
  }
`;

function Search(props) {
  return <StyledSearch placeholder="Введите название"></StyledSearch>;
}

export default Search;

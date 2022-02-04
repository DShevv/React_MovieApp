import React from "react";
import styled from "styled-components";
import Search from "./search/Search";

const Mark = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #beb7fb;
`;

const Caption = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  color: #ebeef5;
  margin: 0;
`;

function Title(props) {
  return (
    <div>
      <Mark>МувиАпп</Mark>
      <Caption>{props.title}</Caption>
      <Search />
    </div>
  );
}

export default Title;

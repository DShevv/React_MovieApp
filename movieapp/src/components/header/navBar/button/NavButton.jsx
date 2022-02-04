import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled(NavLink)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #a8aebf;
  text-decoration: none;
  padding: 12px 16px;
  transition: 0.25s ease-in-out;
  border-radius: 12px;

  &:hover {
    background-color: #1d2642;
  }
`;

function NavButton(props) {
  return <Button to={props.path}>{props.value}</Button>;
}

export default NavButton;

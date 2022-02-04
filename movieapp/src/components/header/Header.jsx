import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import NavBar from "./navBar/navBar";

const Logo = styled.a`
  display: block;
  height: 40px;
  width: 40px;
  background: url(${logo});
`;

const StyledNavBar = styled(NavBar)`
  display: flex;
  justify-content: space-between;
  width: 217px;
`;

function Header({ className }) {
  return (
    <div className={className}>
      <Logo />
      <StyledNavBar />
    </div>
  );
}

export default Header;

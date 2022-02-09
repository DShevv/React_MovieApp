import React from "react";
import NavButton from "./button/NavButton";

function NavBar({ className }) {
  return (
    <div className={className}>
      <NavButton path="/movie" value="Фильмы"></NavButton>
      <NavButton path="/tv" value="Сериалы"></NavButton>
    </div>
  );
}

export default NavBar;

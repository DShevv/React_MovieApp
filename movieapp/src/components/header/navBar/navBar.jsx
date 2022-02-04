import React from "react";
import NavButton from "./button/NavButton";

function NavBar({ className }) {
  return (
    <div className={className}>
      <NavButton path="/movies" value="Фильмы"></NavButton>
      <NavButton path="/tvshows" value="Сериалы"></NavButton>
    </div>
  );
}

export default NavBar;

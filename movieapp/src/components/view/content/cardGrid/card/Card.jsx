import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CardRaiting from "./cardRaiting/CardRaiting";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 480px;
  padding: 8px;

  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  transition: ease-in-out 0.3s;
  transform: translateZ(0);
  z-index: 2;
  

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    background: rgba(46, 58, 90, 0.8);
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Poster = styled.img`
  width: 266px;
  min-height: 400px;
  border-radius: 8px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 8px 8px 0px 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #ebeef5;
  
`;

const CardContainer = styled.div`
  position: relative;
`;

const BackGroud = styled.img`
  position: absolute;
  margin: 8px;
  width: 268px;
  height: 456px;
  z-index: 0;
`;

function Card(props) {

  const img = `https://image.tmdb.org/t/p/w500${props.data.poster_path}`;
  return (
    <StyledNavLink to={`/${props.code}/${props.data.id}`}>
      <CardContainer>
        <BackGroud src={img} />
        <StyledCard>
          <CardRaiting value={props.data.vote_average}></CardRaiting>
          <Poster
            src={img}
            alt={`Постер фильма ` + props.data[props.name]}
          />
          <Title>{props.data[props.name]}</Title>
        </StyledCard>
      </CardContainer>
    </StyledNavLink>
    
  );
}

export default Card;

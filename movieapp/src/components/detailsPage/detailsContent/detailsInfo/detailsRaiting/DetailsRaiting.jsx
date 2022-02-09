import React from "react";
import styled from "styled-components";
import star from "../../../../../assets/star.svg";

const Raiting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60px;
  height: 32px;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 15px;
  color: #ffad49;
`;

function DetailsRaiting(props) {
  return (
    <Raiting>
      <img src={star} alt="Рейтинг" />
      {props.value}
    </Raiting>
  );
}

export default DetailsRaiting;

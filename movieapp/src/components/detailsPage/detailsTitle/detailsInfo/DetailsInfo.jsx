import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const StyledInfo = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 560px;
  height: 144px;
  top: 408px;
  left: 80px;
  padding: 40px;

  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 24px;
`;

const Path = styled.div`
  word-spacing: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #BEB7FB;
`;

const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;

  color: #EBEEF5;
`;

function DetailsInfo(props) {
  const params = useParams();

  return (
    <StyledInfo>
      <Path>
        МувиАпп / Фильмы
      </Path>
      <Title>Мстители: Финал</Title>
    </StyledInfo>
  );
}

export default DetailsInfo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const StyledInfo = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 156px;
`;

const Poster = styled.img`
  width: 480px;
  height: 720px;
  border-radius: 24px;
`;

function TvInfo(props) {
  const params = useParams();
  
  return (
    <StyledInfo>
      
    </StyledInfo>
  );
}

export default TvInfo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const StyledDetails = styled.section`
  margin-top: 40px;
  margin-bottom: 156px;
`;

function DetailsContent(props) {
  const params = useParams();
  
  return (
    <StyledDetails>
        
    </StyledDetails>
  );
}

export default DetailsContent;

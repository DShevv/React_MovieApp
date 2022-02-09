import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailsInfo from "./detailsInfo/DetailsInfo";

const StyledTitle = styled.section`
  position: relative;
  margin-top: 40px;
  margin-bottom: 152px;
`;

const Backgroud = styled.img`
  width: 1200px;
  height: 480px;
  border-radius: 40px;
  object-fit: cover;
`;

const Gradient = styled.div`
  position: relative;
  border-radius: 40px;
  width: 1200px;
  height: 480px;

  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%);
  }
`;

function DetailsTitle(props) {
  const params = useParams();

  return (
    <StyledTitle>
      <Gradient>
        <Backgroud src="https://s3-alpha-sig.figma.com/img/aee2/0848/eb920f8e114b5333d1ef049c912e2055?Expires=1645401600&Signature=B8aKavUiTM8UhQnHf6jgu~ZkNQKPBXbLg87vVjZfKqLJWBpqf0iE8XATZSHJ3k5n8ppYRaNLIzsHTQkJeghfdTdVqJFKfyXak3gBYLw4NgH4aENbVBvU2kS68emGS1HPFftCy5MX6tvlv8vswmpRGr0WHCuHfIeBCw1HB44yEaLmzLobk30bNbVoZs8QxZBKF2zFsqRjgy806AGk55wBNcsKibQHOskecbC0A7~gBH90ENcmtLUad2y82ubKUuxD9is0-Yiqgv1Kf7S0668ydalrSpjuAb0~b8hNsjWFUAl-s4XYh8sI70DMvTLI3tIZcLAiwipxmLBynduRRlRTUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>

      </Gradient>
      <DetailsInfo />
    </StyledTitle>
  );
}

export default DetailsTitle;

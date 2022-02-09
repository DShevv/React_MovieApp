import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailsTitle from "./detailsTitle/DetailsTitle";
import DetailsContent from "./detailsContent/DetailsContent";
import load from "../../assets/loading.svg";

const StyledDetails = styled.section`
  margin-top: 40px;
  margin-bottom: 156px;
`;

const Loader = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: 200px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 56px;
  height: 56px;
`;

function Details(props) {
  const params = useParams();

  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${props.code}/${params.movieId}?api_key=${process.env.REACT_APP_API_CODE}&language=ru-RU`)
    .then(res => res.json() )
    .then(result => {
      setData(result);
      console.log(result);
    })
  }, [props, params.movieId]);

  


  return (
    <StyledDetails>
        {data === null ? <Loader>
      <StyledImg src={load} alt="Загрузка"/>
      </Loader> 
      :
      <div>
        <DetailsTitle page={props.page} back={data.backdrop_path} title={data.title}/>
        <DetailsContent code={props.code} data={data}/>
      </div>
      }
    </StyledDetails>
  );
}

export default Details;

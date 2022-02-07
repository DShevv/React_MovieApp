import React, { useEffect, useState } from "react";
import Title from "./title/Title";
import Content from "./content/Content";
import styled from "styled-components";

const StyledView = styled.section`
  margin-top: 64px;
  margin-bottom: 156px;
`;

function View(props) {

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${props.code}/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ru-RU&page=${page}`)
    .then(res => {
      res.json()
      .then(result => {
        setData(result.results);
      })
    })
  }, [ props.code, page]);

  console.log(data);

  return (
    <StyledView>
      <Title title={props.page} />
      {data === null ? <div>+</div> : <Content data={data} name={props.code === "tv" ? "name" : "title"}/>}
    </StyledView>
  );
}

export default View;

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
    setPage(1);
  }, [props.code]);

  useEffect(() => {
    setPage(JSON.parse(window.sessionStorage.getItem("page")));
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.sessionStorage.setItem("page", page);
    fetch(`https://api.themoviedb.org/3/${props.code}/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ru-RU&page=${page}`)
    .then(res => {
      res.json()
      .then(result => {
        setData(result);
      })
    })
  }, [ props.code, page]);

  function incPage() {
    setPage(page + 1);
  }
  function decPage() {
    setPage(page - 1);
  }

  return (
    <StyledView>
      <Title title={props.page} />
      {data === null ? <div>+</div> : <Content data={data} name={props.code === "tv" ? "name" : "title"} inc={incPage} dec={decPage} />}
    </StyledView>
  );
}

export default View;

import React, { useEffect, useState } from "react";
import Title from "./title/Title";
import Content from "./content/Content";
import styled from "styled-components";
import load from "../../assets/loading.svg";

const StyledView = styled.section`
  margin-top: 64px;
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
    setData(null);
    fetch(`https://api.themoviedb.org/3/${props.code}/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ru-RU&page=${page}`)
    .then(res => res.json() )
    .then(result => {
      setData(result);
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
        {data === null ? 
        <Loader>
          <StyledImg src={load} alt="Загрузка"/>
        </Loader> 
        : <Content data={data} code={props.code} name={props.code === "tv" ? "name" : "title"} inc={incPage} dec={decPage} />}
    </StyledView>
  );
}

export default View;

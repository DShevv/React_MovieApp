import "./App.css";
import View from "./components/view/View";
import styled from "styled-components";
import bgImage from "./assets/Background.svg";
import Header from "./components/header/Header";
import "./index.css";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  overflow: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121829;
  background-image: url(${bgImage});
  background-position: top;
  background-repeat: no-repeat;
`;
const StyledHeader = styled(Header)`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <StyledHeader />
          <Routes>
            <Route path="/" element={<View page="Фильмы" code="movie"/>} />
            <Route path="/movies" element={<View page="Фильмы" code="movie"/>} />
            <Route path="/tvshows" element={<View page="Сериалы" code="tv"/>} />
          </Routes>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}

export default App;

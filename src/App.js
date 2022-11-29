// import logo from './logo.svg';
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/">Home</a>
              <a href="/free">Free Component</a>
              <a href="/auth">Auth Component</a>
            </section>
          </Col>
        </Row>
        <Routes>
          <Route exact path="/" element={<Account />} />
          <Route exact path="/free" element={<FreeComponent />} />
          <Route
            exact
            path="/auth"
            element={
              <ProtectedRoute>
                <AuthComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;

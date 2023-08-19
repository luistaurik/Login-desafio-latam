import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Registro from './components/Registro';
import Alert from './components/Alert'; // Asegura que la ruta sea correcta

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Formulario de Registro</h1>
          <Registro />
         
        </Col>
      </Row>
    </Container>
  );
}

export default App;

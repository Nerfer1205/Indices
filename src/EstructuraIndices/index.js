import Table from 'react-bootstrap/Table';
import { IndexContext } from '../IndexContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EstructuraIndices({id}) {
  const {
    numRegistros,
    longitudRegistros,
    tamBloque,
  } = React.useContext(IndexContext);



  return (
    <Container>
      <Row>
        <Col>
          <Table borderless striped="columns">
            <thead>
              <tr>
                <th>Pos. Bloque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs={6}>
          <Table bordered striped="columns">
            <thead>
              <tr>
                <th>Registros</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Mark</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table borderless striped="columns">
            <thead>
              <tr>
                <th>Pos. indice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id={id}>1</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export { EstructuraIndices };
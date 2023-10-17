import Table from 'react-bootstrap/Table';
import { IndexContext } from '../IndexContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RowRender } from './RowRender';

function EstructuraRegistros({ id }) {
  const {
    registros
  } = React.useContext(IndexContext);
  const [registrosPorBloque, setRegistrosPorBloque] = React.useState(Math.round(registros.tamBloque / registros.longitudRegistros));
  const [cantidadBloques, setCantidadBloques] = React.useState(Math.round(registros.numRegistros / registrosPorBloque));

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table bordered striped="columns">
              <thead>
                <tr>
                  <th>#. Bloque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id={id}>1</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={4}>
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
                  <th>#. registro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { EstructuraRegistros };
import Table from 'react-bootstrap/Table';
import { IndexContext } from '../IndexContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EstructuraIndices.css';

function EstructuraIndicesSecundario({ ids  }) {
  const { id1, id2 } = ids;

  const {
    registros
  } = React.useContext(IndexContext);
  const [indicesPorBloque, setindicesPorBloque] = React.useState(0);
  const [cantidadBloques, setCantidadBloques] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      const indicesPorBloque = Math.round(registros.tamBloque / registros.longitudIndice);
      const cantidadBloques = Math.round(registros.numRegistros / indicesPorBloque);

      setindicesPorBloque(indicesPorBloque);
      setCantidadBloques(cantidadBloques);
    }
  };

  React.useEffect(() => {
    calcularValores();
  }, [registros]);

  return (
    <>
      <Container>
        <Row>
        <Col xs={4}>
            <Table bordered striped="columns">
              <thead>
                <tr>
                  <th>Indices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {indicesPorBloque} por bloque</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table bordered striped="columns">
              <thead>
                <tr>
                  <th># Bloque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id={id1}>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td >3</td>
                </tr>
                <tr>
                  <td  className='dot-container'><div className='dots'></div></td>
                </tr>
                <tr>
                  <td id={id2}>{cantidadBloques}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export { EstructuraIndicesSecundario };
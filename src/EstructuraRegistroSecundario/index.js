import Table from 'react-bootstrap/Table';
import { IndexContext } from '../IndexContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EstructuraRegistros.css';

function EstructuraRegistrosSecundario({ ids }) {
  const { id1, id2 } = ids;
  const {
    registros
  } = React.useContext(IndexContext);
  const [numRegistros, setnumRegistros] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      setnumRegistros(registros.numRegistros);
    }
  };

  React.useEffect(() => {
    calcularValores();
  }, [registros]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table bordered striped="columns">
              <thead>
                <tr>
                  <th># Registro</th>
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
                  <td id={id2}>{numRegistros}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { EstructuraRegistrosSecundario };
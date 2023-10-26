import React, { useState, useEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { IndexContext } from '../IndexContext';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MultinivelPrimario.css';

function MultinivelPrimario() {
  const [niveles, setNiveles] = useState(0);
  const [bloquesPorNivel, setBloquesPorNivel] = useState([]);
  const [ids, setIds] = useState([]);
  const [estructuras, setEstructuras] = useState([]); // Usar un estado para estructuras
  var indicesPorBloque = 0;
  var { registros } = React.useContext(IndexContext);

  useEffect(() => {
    if (registros) {
      const registrosPorBloque = Math.floor(registros.tamBloque / registros.longitudRegistros);
      const numeroIndices = Math.ceil(registros.numRegistros / registrosPorBloque);
      indicesPorBloque = Math.floor(registros.tamBloque / registros.longitudIndice);
      const cantidadBloques = Math.ceil(numeroIndices / indicesPorBloque);
      const niveles = Math.ceil(Math.log(numeroIndices) / Math.log(indicesPorBloque));
      setNiveles(niveles);

      const bloquesPorNivel = [];
      for (let i = 0; i < niveles; i++) {
        bloquesPorNivel.push(Math.ceil(cantidadBloques / (indicesPorBloque ** i)));
      }
      setBloquesPorNivel(bloquesPorNivel);

      const newIds = [];
      for (let i = 0; i < bloquesPorNivel.length * 2; i++) {
        newIds.push(`elem${i}`);
      }
      setIds(newIds);

      crearEstructuras();
      aniadirFlechas();
      console.log(estructuras)
    }
  }, [registros]);

  const crearEstructuras = () => {
    let indice = 0;
    const nuevasEstructuras = [];
    for (let i = 0; i < bloquesPorNivel.length; i++) {
      if (bloquesPorNivel[i] > 1) {
        nuevasEstructuras.push(
          <Container key={i}>
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
                      <td>{indicesPorBloque} por bloque</td>
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
                      <td id={ids[indice]}>1</td>
                    </tr>
                    <tr>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className='dot-container'><div className='dots'></div></td>
                    </tr>
                    <tr>
                      <td id={ids[indice + 1]}></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        );
      }
      if (bloquesPorNivel[i] === 1) {
        nuevasEstructuras.push(
          <Container key={i}>
            <Row>
              <Col>
                <Table bordered striped="columns">
                  <thead>
                    <tr>
                      <th># Indices</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id={ids[indice]}>1</td>
                    </tr>
                    <tr>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className='dot-container'><div className='dots'></div></td>
                    </tr>
                    <tr>
                      <td id={ids[indice + 1]}>{indicesPorBloque}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        );
      }
      indice += 2;
    }
    setEstructuras(nuevasEstructuras); // Actualizar el estado de estructuras
  }

  const aniadirFlechas = () => {
    const nuevasEstructuras = [...estructuras];
    for (let i = 0; i < ids.length / 2; i++) {
      nuevasEstructuras.push(
        <Xarrow key={`arrow-${i}`} start={ids[i]} end={ids[i + 2]} />
      );
    }
    setEstructuras(nuevasEstructuras); // Actualizar el estado de estructuras
  }

  return (
    <Xwrapper>
      {estructuras}
    </Xwrapper>
  );
}

export { MultinivelPrimario };

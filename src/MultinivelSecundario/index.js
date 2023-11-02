import React, { useState, useEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { IndexContext } from '../IndexContext';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MultinivelSecundario.css';

function MultinivelSecundario() {
  const [bloquesPorNivel, setBloquesPorNivel] = useState([]);
  const [ids, setIds] = useState([]);
  const [estructuras, setEstructuras] = useState([]); // Usar un estado para estructuras
  const [arrows, setArrows] = useState([]);
  const [indicesPorBloque, setIndicesPorBloque] = useState(0);
  var { registros } = React.useContext(IndexContext);

  useEffect(() => {
    if (registros) {
      setIndicesPorBloque(Math.floor(registros.tamBloque / registros.longitudIndice));
    }
  }, []);

  useEffect(() => {
    if (registros && indicesPorBloque !== 0) {
      setIndicesPorBloque(Math.floor(registros.tamBloque / registros.longitudIndice));
      const cantidadBloques = Math.ceil(registros.numRegistros / indicesPorBloque);
      const niveles = Math.ceil(Math.log(registros.numRegistros) / Math.log(indicesPorBloque));

      const bloquesPorNivel = [cantidadBloques];
      for (let i = 1; i < niveles; i++) {
        bloquesPorNivel.push(Math.ceil(bloquesPorNivel[i - 1] / indicesPorBloque));
        console.log(i)
        console.log(Math.ceil(bloquesPorNivel[i - 1]), indicesPorBloque)
      }
      setBloquesPorNivel(bloquesPorNivel);
    }
  }, [registros, indicesPorBloque]);

  useEffect(() => {
    console.log('xd2');
    const newIds = [];
    for (let i = 0; i < bloquesPorNivel.length * 2; i++) {
      newIds.push(`elem${i}`);
    }
    setIds([...newIds].reverse());
  }, [bloquesPorNivel]);

  useEffect(() => {
    console.log('xd3');
    crearEstructuras();
  }, [ids]);

  useEffect(() => {
    console.log('xd4');
    aniadirFlechas();
  }, [estructuras])

  const crearEstructuras = () => {
    let indice = 0;
    const nuevasEstructuras = [];
    for (let i = 0; i < bloquesPorNivel.length; i++) {
      if (bloquesPorNivel[i] > 1) {
        console.log(i)
        nuevasEstructuras.push(
          <Container key={`container-1-${i}`}>
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
                    {(bloquesPorNivel[i] === 1) && (
                      <tr>
                        <td id={ids[indice]}>1</td>
                      </tr>
                    )}
                    {(bloquesPorNivel[i] === 2) && (
                      <>
                        <tr>
                          <td id={ids[indice]}>1</td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>2</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i] === 3) && (
                      <>
                        <tr>
                          <td id={ids[indice]}>1</td>
                        </tr>
                        <tr>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>3</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i] > 3) && (
                      <>
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
                          <td id={ids[indice + 1]}>{bloquesPorNivel[i]}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        );
      }
      if (bloquesPorNivel[i] === 1 && bloquesPorNivel.length > 1) {
        nuevasEstructuras.push(
          <Container key={`container-2-${i}`}>
            <Row>
              <Col>
                <Table bordered striped="columns">
                  <thead>
                    <tr>
                      <th># Indices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(bloquesPorNivel[i - 1] === 1) && (
                      <tr>
                        <td id={ids[indice]}>1</td>
                      </tr>
                    )}
                    {(bloquesPorNivel[i - 1] === 2) && (
                      <>
                        <tr>
                          <td id={ids[indice]}>1</td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>2</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i - 1] === 3) && (
                      <>
                        <tr>
                          <td id={ids[indice]}>1</td>
                        </tr>
                        <tr>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>3</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i - 1] !== indicesPorBloque) && (bloquesPorNivel[i - 1] > 3) && (
                      <>
                        <tr>
                          <td className='dot-container'><div className='dots'></div></td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>{bloquesPorNivel[i - 1]}</td>
                        </tr>
                        <tr>
                          <td className='dot-container'><div className='dots'></div></td>
                        </tr>
                        <tr>
                          <td>{indicesPorBloque}</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i - 1] !== indicesPorBloque) && (bloquesPorNivel[i - 1] <= 3) && (
                      <>
                        <tr>
                          <td className='dot-container'><div className='dots'></div></td>
                        </tr>
                        <tr>
                          <td>{indicesPorBloque}</td>
                        </tr>
                      </>
                    )}
                    {(bloquesPorNivel[i - 1] === indicesPorBloque) && (bloquesPorNivel[i - 1] > 3) && (
                      <>
                        <tr>
                          <td className='dot-container'><div className='dots'></div></td>
                        </tr>
                        <tr>
                          <td id={ids[indice + 1]}>{indicesPorBloque}</td>
                        </tr>
                      </>
                    )}

                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        );
      }
      if (bloquesPorNivel[i] === 1 && bloquesPorNivel.length === 1) {
        nuevasEstructuras.push(
          <Container key={`container-2-${i}`}>
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
    setEstructuras([...nuevasEstructuras].reverse()); // Actualizar el estado de estructuras
  }

  const aniadirFlechas = () => {
    const arrows = [];
    for (let i = 0; i < ids.length - 2; i++) {
      console.log(ids.length, ids.length / 2)
      console.log(ids[i + 2], ids[i], i);
      arrows.push(
        <Xarrow key={`arrow-${i}`} start={ids[i + 2]} end={ids[i]} />
      );
    }
    arrows.push(
      <Xarrow key={`arrow-${(ids.length / 2) + 1}`} start={ids[0]} end='elem3ms' />
    );
    arrows.push(
      <Xarrow key={`arrow-${(ids.length / 2) + 2}`} start={ids[1]} end='elem4ms' />
    );
    setArrows(arrows); // Actualizar el estado de estructuras 
  }

  return (
    <Xwrapper>
      <Container>
        <Row>
          {estructuras.map((estructura, index) => (
            <Col key={index}>
              {estructura}
            </Col>
          ))}
        </Row>
        {arrows}
      </Container>
    </Xwrapper>
  );
}

export { MultinivelSecundario };

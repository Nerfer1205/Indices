import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { EstructuraRegistros } from '../EstructuraRegistros';
import { EstructuraIndices } from '../EstructuraIndices';
import { EstructuraIndicesSecundario } from '../EstructuraIndicesSecundario';
import { EstructuraRegistrosSecundario } from '../EstructuraRegistroSecundario';
import { MultinivelPrimario } from '../MultinivelPrimario';
import { MultinivelSecundario } from '../MultinivelSecundario';
import { IndexContext } from '../IndexContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps({ children }) {
  const { registros } = React.useContext(IndexContext);
  const [opcionIndice, setOpcionIndice] = React.useState(0);

  React.useEffect(() => {
    if (registros) {
      setOpcionIndice(registros.tipoIndice);
    }
  }, [registros]);

  return (
    <>
      <Xwrapper>
        <Container>
          <Row>
            <Col>
              {opcionIndice === '1' && (
                <>
                  <EstructuraIndices ids={{ id1: 'elem1', id2: 'elem2' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '2' && (
                <>
                  <EstructuraIndicesSecundario ids={{ id1: 'elem1', id2: 'elem2' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '3' && (

                <MultinivelPrimario />
              )}
              {opcionIndice === '4' && (

                <MultinivelSecundario />
              )}
            </Col>
            {(opcionIndice === '1' || opcionIndice === '2') && (
              <Col xs={4}></Col>
            )}
            <Col>
              {opcionIndice === '1' && (
                <>
                  <EstructuraRegistros ids={{ id1: 'elem3', id2: 'elem4' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '2' && (
                <>
                  <EstructuraRegistrosSecundario ids={{ id1: 'elem3', id2: 'elem4' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '3' && (
                <EstructuraRegistros ids={{ id1: 'elem3mp', id2: 'elem4mp' }} />
              )}
              {opcionIndice === '4' && (
                <EstructuraRegistrosSecundario ids={{ id1: 'elem3ms', id2: 'elem4ms' }} />
              )}
            </Col>
          </Row>
        </Container>
      </Xwrapper>
    </>
  );
}

export { Steps };

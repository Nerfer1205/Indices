import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { EstructuraRegistros } from '../EstructuraRegistros';
import { EstructuraIndices } from '../EstructuraIndices';
import { EstructuraIndicesSecundario } from '../EstructuraIndicesSecundario';
import { EstructuraRegistrosSecundario } from '../EstructuraRegistroSecundario';
import { MultinivelPrimario } from '../MultinivelPrimario';
import { IndexContext } from '../IndexContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps() {
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
            </Col>
            <Col xs={4}></Col>
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
                <EstructuraRegistros ids={{ id1: 'elem3', id2: 'elem4' }} />
              )}
            </Col>
          </Row>
        </Container>
      </Xwrapper>
    </>
  );
}

export { Steps };

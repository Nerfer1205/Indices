import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { EstructuraRegistros } from '../EstructuraRegistros';
import { EstructuraIndices } from '../EstructuraIndices';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };


function Steps() {
    return (
        <div >
            <Xwrapper>
                <Container>
                    <Row>
                        <Col>
                            <EstructuraIndices id={'elem1'} />
                        </Col>
                        <Col xs={4}>
                        </Col>
                        <Col>
                            <EstructuraRegistros id={'elem2'} />
                        </Col>
                    </Row>
                </Container>
                <Xarrow start={'elem1'} end="elem2" />
            </Xwrapper>
        </div>
    );
}
export { Steps };
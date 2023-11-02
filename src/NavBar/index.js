import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="parametros">Parámetros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="indices">Ver indices</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="dinamicas">Dinamicas</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export  {NavBar};
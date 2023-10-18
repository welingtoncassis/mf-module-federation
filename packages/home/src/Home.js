import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <div>
      <header className='bg-primary text-white text-center py-5'>
        <Container>
          <h1 className='display-4'>Bem-vindo ao Microfrontend Home </h1>
          <p className='lead'>
            Este é um exemplo de uma página de início criada no microfrontend
            home e importada usando module federation
          </p>
          <Button color='light'>Saiba Mais</Button>
        </Container>
      </header>

      <section className='py-5'>
        <Container>
          <Row>
            <Col xs='12' sm='6'>
              <h2>Seção 1</h2>
              <p>Texto ou conteúdo da seção 1.</p>
            </Col>
            <Col xs='12' sm='6'>
              <h2>Seção 2</h2>
              <p>Texto ou conteúdo da seção 2.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className='bg-dark text-white text-center py-3'>
        <Container>
          <p>© {new Date().getFullYear()} welingtoncassis</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;

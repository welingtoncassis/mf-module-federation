import React from "react";
import { Button } from "reactstrap";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Row
        className='justify-content-center align-items-center'
        style={{ minHeight: "100vh" }}
      >
        <Col xs={12} sm={6} md={4} lg={3} className='bg-light border'>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <CardBody>
              <CardTitle tag='h5'>Olá Module Federation</CardTitle>
              <CardSubtitle className='mb-2 text-muted' tag='h6'>
                Microfrontend Home
              </CardSubtitle>
              <CardText>Este componente é do microfrontend Home</CardText>
              <Button>Saiba mais</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

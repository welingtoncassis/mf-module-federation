import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Contact = () => {
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
              <Card>
                <CardBody>
                  <CardTitle tag='h5'>Entre em Contato</CardTitle>
                  <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    Microfrontend Contact
                  </CardSubtitle>
                  <Form>
                    <FormGroup>
                      <Label for='name'>Nome</Label>
                      <Input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Seu nome'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='email'>E-mail</Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Seu e-mail'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='message'>Mensagem</Label>
                      <Input
                        type='textarea'
                        name='message'
                        id='message'
                        placeholder='Sua mensagem'
                      />
                    </FormGroup>
                    <Button color='primary'>Enviar</Button>
                  </Form>
                </CardBody>
              </Card>
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

export default Contact;

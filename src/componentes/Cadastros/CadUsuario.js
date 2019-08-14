import React from 'react';
import Navegacao from '../../Navegacao';
import '../commons/Cads.css';
import EnderecoPadrao from '../commons/EnderecoPadrao';
import { InputGroup, Input, InputGroupAddon, Container, Row, Col, Button, Form } from 'reactstrap';


export default class CadUsuarios extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Seu sabor favorito é: ');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navegacao />
        <Container>
          <Form>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Nome:</InputGroupAddon>
                  <Input />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Usuario:</InputGroupAddon>
                  <Input />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Senha:</InputGroupAddon>
                  <Input type="password" />
                </InputGroup>
              </Col>
            </Row>
            <EnderecoPadrao />
            <br />
            <Row>
              <Col xs={{ size: 1, offset: 10 }}>
                <Button color="success" onClick={this.handleSubmit}>Salvar</Button>
              </Col>
              <Col xs="1">
                <Button color="danger">Limpar</Button>
              </Col>
            </Row>
          </Form>

        </Container>
      </div>
    )
  }
}
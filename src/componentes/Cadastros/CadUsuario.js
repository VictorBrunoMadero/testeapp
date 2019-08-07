import React from 'react';
import UserTable from '../commons/UserTable';
import Navegacao from '../../Navegacao';
import { InputGroup, Input, InputGroupAddon, InputGroupText, Container, Row, Col } from 'reactstrap';

const CadUsuarios = () => {
  return (
    <div>
      <Navegacao />
      <div>
        <Container>
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
          <Row>
            <Col>
              <InputGroup>
                <InputGroupAddon addonType="prepend">E-mail:</InputGroupAddon>
                <Input placeholder="email@exemplo.com" />
              </InputGroup>
            </Col>
          </Row>
          <InputGroup>
            <Input placeholder="username" />
            <InputGroupAddon addonType="append">
              <InputGroupText>@example.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$</InputGroupText>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Dolla dolla billz yo!" />
            <InputGroupAddon addonType="append">
              <InputGroupText>$</InputGroupText>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
        </Container>
      </div>

    </div>
  )
}

export default CadUsuarios;
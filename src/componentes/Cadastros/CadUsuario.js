import React from 'react';
import UserTable from '../commons/UserTable';
import Navegacao from '../../Navegacao';
import EnderecoPadrao from '../commons/EnderecoPadrao';
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
          <EnderecoPadrao/>
        </Container>
      </div>

    </div>
  )
}

export default CadUsuarios;
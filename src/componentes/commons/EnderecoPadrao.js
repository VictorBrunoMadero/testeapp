import React from 'react';
import { InputGroup, Input, InputGroupAddon, Row, Col } from 'reactstrap';

const EnderecoPadrao = () => {
  return (
    <div>
      <Row>
        <Col xs="9">
          <InputGroup>
            <InputGroupAddon addonType="prepend">Rua</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Numero</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <InputGroup>
            <InputGroupAddon addonType="prepend">Comp.</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
        <Col xs="6">
          <InputGroup>
            <InputGroupAddon addonType="prepend">Bairro</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
        <Col xs="3">
          <InputGroup>
            <InputGroupAddon addonType="prepend">CEP</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">E-mail:</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Telefone</InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default EnderecoPadrao;
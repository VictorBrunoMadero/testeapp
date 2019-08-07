import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, InputGroup, InputGroupAddon, Input, Form } from 'reactstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            senha: '',
            usuario: ''
        }
        this.recebeDados = this.recebeDados.bind(this);
        this.enviarDados = this.enviarDados.bind(this);
    }

    recebeDados(e) {
        const target = e.target;
        const name = target.name;
        this.setState({ [name]: target.value });
    }

    enviarDados(event) {
        event.preventDefault();
        alert('Usuario: ' + this.state.usuario + '\nSenha: ' + this.state.senha);
    }

    render() {
        return (
            <div className='caixaLogin'>
                <Container>
                    <Row>
                        <Col className='grupoDados' sm={{ size: 4, order: 1, offset: 4 }}>
                            <Form onSubmit={this.enviarDados}>
                                <InputGroup className='usuario'>
                                    <InputGroupAddon addonType="prepend">Usuário</InputGroupAddon>
                                    <Input name='usuario' id='usuario' onChange={this.recebeDados} />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Senha</InputGroupAddon>
                                    <Input type='password' name='senha' id='senha' onChange={this.recebeDados} />
                                </InputGroup>
                                <Link to='/dash'><Button className='btnEntrar' color="success" type='submit'>Entrar</Button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;
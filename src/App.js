import React from 'react';
import './App.css';
import { Button, Container, Row, Col, InputGroup, InputGroupAddon, Input, Form } from 'reactstrap';

const base = "http://localhost:";
const door = "8080";
const context = "/login/";
const headers = {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"};

export default class App extends React.Component {

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
        fetch('https://api.github.com/gists', {
            method: 'post',
            body: JSON.stringify(opts)
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            ChromeSamples.log('Created Gist:', data.html_url);
          });
    }

    render() {
        return (
            <div className='caixaLogin'>
                <Container>
                    <Row>
                        <Col className='grupoDados' sm="11">
                            <Form onSubmit={this.enviarDados}>
                                <InputGroup className='usuario'>
                                    <InputGroupAddon addonType="prepend">Usuário</InputGroupAddon>
                                    <Input name='usuario' id='usuario' onChange={this.recebeDados} />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Senha</InputGroupAddon>
                                    <Input type='password' name='senha' id='senha' onChange={this.recebeDados} />
                                </InputGroup>
                                {/*<Link to='/dash'>*/}
                                <Button className='btnEntrar' color="success" type='submit'>Entrar</Button>
                                {/*</Link>*/}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
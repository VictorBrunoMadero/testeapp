import React from 'react';
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Navegacao from './Navegacao';
import CadUsuario from './componentes/Cadastros/CadUsuario';


ReactDOM.render(
    <BrowserRouter>
        <Helmet title="Instituto SENAI de Inovação"/>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/dash' component={Navegacao} />
            <Route path='/CadUsuario' component={CadUsuario} />
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));
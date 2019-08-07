import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Navegacao.css';
import Logo from './Logo';

class Navegacao extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navcolor" expand="md">
                    <NavbarBrand href="/" className="nav-brand-cor" ><Logo className="logosize"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="nav-cor-geral" nav caret>
                                    Cadastros
                                </DropdownToggle>
                                <DropdownMenu className="navcolor" right>
                                    <DropdownItem className="nav-cor-geral">
                                        Clientes
                                    </DropdownItem>
                                    <DropdownItem className="nav-cor-geral">
                                        Normas
                                    </DropdownItem>
                                    <DropdownItem className="nav-cor-geral">
                                        Procedimentos
                                    </DropdownItem>
                                    <DropdownItem className="nav-cor-geral">
                                        Amostras
                                    </DropdownItem>
                                    <DropdownItem href="/CadUsuario" className="nav-cor-geral">
                                        Usuarios
                                    </DropdownItem>
                                    <DropdownItem className="nav-cor-geral">
                                        Equipamentos
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="nav-cor-geral" href="">Criação O.S.</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="nav-cor-geral" nav caret>
                                    Consultas
                                </DropdownToggle>
                                <DropdownMenu className="navcolor" right>
                                    <DropdownItem className="nav-cor-geral">
                                        Ordens de Serviço
                                    </DropdownItem>
                                    <DropdownItem className="nav-cor-geral">
                                        Ensaios
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="nav-cor-geral" href="">Gerar Relatorio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-cor-geral navsair" href="">Sair</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navegacao;
import React from 'react';

import {Button, Col, Row, Input } from 'reactstrap';

class Login extends React.Component {
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { email, password, address } = this.state
        return (
            <form onSubmit={this.handleSubmit}>

                <Button type='submit' ></Button>
            </form>
        )
    }
}
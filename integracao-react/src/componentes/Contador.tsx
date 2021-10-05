import React, { Component } from 'react';
import ContadorValor from './ContadorValor';

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState {
    valor: number
}

export default class Contador extends Component<IContadorProps, IContadorState> {
    
    public state = { valor: this.props.valorInicial || 0 }
    
    render() {
        return (
                <ContadorValor contador={this.state.valor} /> 
        )
    }
}
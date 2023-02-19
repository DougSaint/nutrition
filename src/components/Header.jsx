import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component{
    render(){
        return (
            <header>
            <nav>
              <ul>
              <Link to= "/calculate" className='link'>Calcular</Link>
              <Link to= "/nutrition" className='link'>nutrição</Link>
                <li><a href="/contact">Contato</a></li>
              </ul>
            </nav>
            <h1>Meu Cabeçalho</h1>
          </header>
        )
    }
}
import Head from 'next/head'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Carrossel from '../src/components/carrossel.js'
import BarraDeNavegacao from '../src/components/barraDeNavegacao'


export default function Home() {
    return (
        <Home className='fundo'>
            <Container fluid className='fundo'>
                <Carrossel />
            </Container>
        </Home>
    )
    function Home({ children }) {
        return (
            <div>
                {children}
                <style jsx>{`
                    .fundo{
                        background-color: #405277;
                    }
                `}
                </style>
            </div>
        )
    }
}

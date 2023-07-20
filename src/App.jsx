import { useState } from 'react'

import styled from '@emotion/styled'
import Formulario from './components/Formulario'


import ImagenCripto from './img/imagen-criptos.png'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;// centrar el contenedor 
  width: 90 %;  
  @media (min-width: 992px) { // despues de 992 px se aplica display grid
    display: grid; 
    grid-template-columns: repeat(2,1fr);// dos columnas de tamaño de tamaño flexible de 1fr
    column-gap: 2rem; // espacio de dos rem 
  }
`

const Imagen = styled.img`
  max-width: 400px; // maximo de 400px
  width: 80%; // usa un 80 % del contenedor
  margin: 100px auto 0 auto;
  display: block; 
`

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #fff;
  text-align:center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block; // ocupa todo el ancho 
    margin: 10px auto 0 auto; 
  }
  

`

function App() {
 

  return (
    
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='imagenes criptomonedas'
      />

      <div>
        <Heading>Cotiza criptomonedas al Instante</Heading> 
        <Formulario

        /> 

      </div>


    </Contenedor>

  )
}

export default App

import React, { Fragment } from "react"
import Link from "next/link"
import styled from 'styled-components'

import Buscador from "../interfazUsuario/buscador";
import Nav from "../layouts/nav";
import Boton from "./boton";

const ContenedorHeader = styled.div `
    display : flex;
    justify-content: space-between;
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

`;

const Logo = styled.p`
    font-size : 4rem;
    font-weight: 700;
    margin-right: 2rem;
    color: #F8750E;

`
const ContenedorBoton = styled.div  ` 
    display: flex;
    align-items: center;

`
const ContenedorNav = styled.div`
    display: flex;
    align-items: center;
`  

const Header  = (props) => {
    
    const usuario = false;

    return(
        <Fragment>
            <header>
                <ContenedorHeader>
                    <ContenedorNav>
                        <Logo>P</Logo>

                        {/*Buscador*/}
                        <Buscador/>


                        {/*Nav*/}
                        <Nav/>

                    </ContenedorNav>
                    
                    <ContenedorBoton>

                    {
                        usuario ? (
                            <>
                             <p>Hola Piro</p>
                                     <Link href="/">
                                        <Boton color = "true" >Cerrar Sesión</Boton>
                                     </Link>

                            
                            </> 
                        ):(
                        <> 
                            <Link href="/login">
                                 <Boton color = "true">Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton bgColor = "true">Crear Cuenta</Boton>
                            </Link>
                         </>   
                        )
                    }

                                
                            
                          
                            
                   

                    </ContenedorBoton>




                </ContenedorHeader>







            </header>


            <style>
                {
                    `
                    header{
                        border-bottom : 2px solid #e1e1e1;
                        margin-top: -40px;
                        height: 180px;
                    }

                  
                    `
                }
            </style>



        </Fragment>   
    
    
    )





}

export default Header;
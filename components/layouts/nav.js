import React, { Fragment } from "react"
import Link from "next/link"
import styled from 'styled-components';

const Navegacion = styled.nav` 
    padding-left:2rem;
    
    a{
        margin-left:2rem;
        font-size:1.1rem;

        &:last-of-type{
            margin-right:0;
        }

    }


` 


const Nav  = () => {

    return(
        <Fragment>
            <Navegacion>
                <Link  href="/"> Inicio </Link>
                <Link href="/populares"> Más Populares</Link>
                <Link href="/nuevo-producto"> Nuevo Producto </Link>
                
                
            </Navegacion>      


        </Fragment>  
    )

}

export default Nav;
import React, { Fragment } from "react"
import styled from 'styled-components';



const Input = styled.input`
    border: 1px solid;
    padding: 0.5rem;
    min-width: 300px
`
const InputSubmit = styled.div`
    width: 4rem;
    height: 2rem;
    background-image: url("../../img/buscar.png");
    margin-left: 0.2rem;
    border: none;

`
const Buscador  = () => {

    return(
        <Fragment>
            <form>
            
            <Input type="text"
            placeholder="Buscar Productos"/>

            {/*<InputSubmit type="submit"></InputSubmit>*/}

            </form>
        
        </Fragment>
    
       
    
    )


}

export default Buscador;
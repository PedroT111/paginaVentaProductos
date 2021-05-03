import styled from 'styled-components'
import React from "react";

const Boton = styled.a ` 
    font-weight: 700;
    border: 1px solid #d1d1d1;
    padding: .5rem 1rem;
    margin-right: 1rem;
    background-color: white;
    color : ${props => props.color ? "white" : "black"};
    background-color : ${props => props.bgColor ? "white" : "#F8750E"};

    &:hover{
        cursor:pointer;
    }



`

export default Boton;
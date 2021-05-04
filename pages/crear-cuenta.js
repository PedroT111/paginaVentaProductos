import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import styled from "styled-components"

//styles
import {Formulario, Campo, InputSubmit, ErrorFrom} from "../components/interfazUsuario/formulario";

const Title = styled.h1`
    text-align: center;
    margin: 5rem
`;
//Validaciones
import ValidarFormulario from "../hooks/validarFormulario"; //Validar Formulario
import ValidarCuenta from "../validacion/validarCuenta"; //Valida la cuenta

const STATE_INICIAL = {
    usuario:"",
    email:"",
    contraseña:""
}


const CrearCuenta = () => {

    const{ valores, error, OnChange, OnSubmit, OnBlur} = ValidarFormulario(STATE_INICIAL, ValidarCuenta); //falta crearCuenta

    const {usuario, email, contraseña} = valores

    const crearCuenta = () => {
        console.log("Creando cuenta...")
    }

    return (
         
        <Layout>
            <>
            <Title>Crear Cuenta</Title>

            <Formulario onSubmit = {OnSubmit}>
                <Campo>
                    <label htmlFor="usuario">Usuario</label>
                    <input
                    type = "text"
                    placeholder="Nombre de Usuario"
                    name="usuario"
                    value ={usuario}
                    onChange = {OnChange}
                    onBlur= {OnBlur}
                    />
                </Campo>

                {error.usuario && <ErrorFrom>{error.usuario}</ErrorFrom>  /*Esto funciona como un operador ternario*/}

                <Campo>
                    <label htmlFor="email">E-mail</label>
                    <input
                    type = "text"
                    placeholder="juan@ventaproductos.com"
                    name="email"
                    value ={email}
                    onChange = {OnChange}
                    onBlur= {OnBlur}/>
                </Campo>

                {error.email && <ErrorFrom>{error.email}</ErrorFrom>}

                <Campo>
                    <label htmlFor="contraseña">Password</label>
                    <input
                    type="text"
                    placeholder="Contraseña"
                    name="contraseña"
                    value ={contraseña}
                    onChange = {OnChange}
                    onBlur= {OnBlur}/>
                </Campo>

                {error.contraseña && <ErrorFrom>{error.contraseña}</ErrorFrom>}

                <div>
                    <InputSubmit
                    type="submit"
                    value="Crear Cuenta"/>
                </div>
            </Formulario>
            </>
        </Layout>
    );
};

export default CrearCuenta;
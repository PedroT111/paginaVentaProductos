import styled from "styled-components";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;


`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;


    label{
        flex: 0 0 150px; 
        font-size: 1.8rem;

    }

    input{
        flex: 1;
        padding: 0.7rem;
    }
`;

export const InputSubmit = styled.input`
    background-color: #F8750E;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-sixe: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-weight: 700;
    color: #fff;


    :hover{
        cursor: pointer
    }
`;

export const ErrorFrom = styled.p`
    background-color: red;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.3rem;
    text-align: center;
    color: #fff;
    
    
`;
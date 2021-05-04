import React, { useEffect, useState } from 'react';

const ValidarFormulario = (stateInicial, validar, fn) => {

    const [valores, setValores] = useState(stateInicial);
    const[error, setError] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            const sinError = Object.keys(error).length === 0; //cuando no haya errores

            if(sinError){
                //Entonces ejecuta fn
                fn();
            }
            setSubmitForm(false);
        }


    }, []);

    //Funcion que guarda los datos que escribe el usuario

    const OnChange = e => {
        setValores({
            ...valores,
            [e.target.name] : [e.target.value]
        });
    }

    //Funcion cuando se envía el formulario

    const OnSubmit = e => {
        e.preventDefault();

        const erroresValidacion = validar(valores);
        setError(erroresValidacion); //Si hay errores pasa al state de error
        setSubmitForm(true); //Pasa a true para que se ejecute el useEffect
    }

    //Funcion para que desaparezcan los errores de validación mientras se escribe en el form
    const OnBlur = e => {  
        e.preventDefault();

        const erroresValidacion = validar(valores);
        setError(erroresValidacion);
    }

    return {
        valores,
        error,
        OnChange,
        OnSubmit,
        OnBlur
    };
};

export default ValidarFormulario;
export default function ValidarCuenta(valores) {

    let errores = {};

    //Validar usuario

    if(!valores.usuario){
        errores.usuario = "Nombre de usuario obligatorio"
    }

    //Validar email

    if(!valores.email){
        errores.email = "Email es obligatorio";

    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valores.email)){
        errores.email = "Email no válido";
    }

    //Validar Password

    if(!valores.contraseña){
        errores.contraseña = "El password es obligatorio";
    } else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(valores.contraseña)){
        errores.contraseña = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    }


    return errores;
    
}


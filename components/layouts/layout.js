import React from "react"
import Header from "./header"



const Layout  = (props) => {
 //El layout sirve para reutilizar componentes como puede ser el header

    return(
        <div>

            <Header></Header>

         

            

        <main>
            {props.children}
        </main>

        <style>
            {
               ``
            }
        </style>
        </div>

        
    )





}

export default Layout;
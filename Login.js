import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

//pasar funciones a js aparte
const Login = () =>{

    //objeto Persona para validar datos en bd
    const [Persona, IngDatos] =useState({
        
        Cedula: '',
        Clave: '',
    
    });
    
    //funcion para recolectar datos de input y guardar en persona
    
    const recogerdatos = (event) =>{
        
        IngDatos({
        
            ...Persona,
        
            [event.target.id]:event.target.value
        
        });
    }

    //mostrar clave
    const mostrarclave = ()=>{
        
        var visible = document.getElementById("Clave");
        
        if (visible.type === "password") {
        
            visible.type = "text";
        }

        else {
        
            visible.type = "password";
    
    }

    }

    return(
        <div id="ContenedorLogin">
            
            <div id="Desarrollo">
                <h2>HOLIS X2</h2>
            </div>
            
            <div id="FormularioLogin">
                
                <h2 id="Cabecera">Iniciar Sesión</h2>
                
                <form autoComplete="off">
                    
                    <input id="Cedula" placeholder="Ingresar Cedula" className="IngInput" type="text" onChange={recogerdatos}/>
                    <input id="Clave" placeholder="Ingresar Contraseña..." className="IngInput" type="password" onChange={recogerdatos}/>
                    <input type="checkbox" onClick={mostrarclave}/>Mostrar Contraseña
                
                    <Link onClick={event => (!Persona.Cedula || !Persona.Clave) ? event.preventDefault(): null} to="./main">
                        <button className="button" type="submit">Iniciar Sesión</button>
                    </Link>
                    
                    <button className="button olvidado" type="button" onClick={()=>alert("Solicitud de recuperacion enviada al administrador")}>¿Olvido su contraseña?</button>
                    
                </form>
                
            </div>
        
        </div>
    );
}

export default Login;
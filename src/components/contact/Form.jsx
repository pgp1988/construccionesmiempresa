import { useState } from "react";


export const Form = () => {

  const [datosFormulario, setDatosFormulario] = useState({ nombre: "", apellidos: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});

  const validar = () => {
    const errores = {};
    if (!datosFormulario.nombre){
      errores.nombre = "El nombre es obligatorio";
    }else if(datosFormulario.nombre.length < 2){
      errores.nombre = "El nombre debe tener al menos dos letras";
    }else{
      errores.nombre = "";
    }
    if(!datosFormulario.apellidos) {
      errores.apellidos = "El apellido es obligatorio";
    }else if(datosFormulario.apellidos.length < 2){
      errores.apellidos = "El apellido debe tener al menos dos letras";
    }
    if (!datosFormulario.email) {
      errores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(datosFormulario.email)) {
      errores.email = "El email no es válido";
    }
    if(!datosFormulario.mensaje) errores.mensaje = "Por favor, escriba un mensaje";
    return errores;
  };

  const handleChange = (e) => {
    setDatosFormulario({ ...datosFormulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidados = validar();
    setErrores(erroresValidados);

    if (Object.keys(erroresValidados).length === 0) {
      console.log("Formulario válido:", datosFormulario);
      // Aquí enviaríamos el formulario sin errores
    }
  };

  return (
    <form action="#" method="post" encType="application/x-www-form-urlencoded" id="formulario" onSubmit={handleSubmit} noValidate>
        <fieldset id="datosPersonales">
            <legend>Datos personales</legend>
            <div>
              <label>Nombre: <input type="text" name="nombre" placeholder="Escriba su nombre" maxLength="50" onChange={handleChange} className={errores.nombre ? "errorStyle" : null}></input></label>
              {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
            </div>
            <div>
              <label>Apellidos: <input type="text" name="apellidos" placeholder="Escriba sus apellidos" maxLength="50" onChange={handleChange} className={errores.apellidos ? "errorStyle" : null}></input></label>
              {errores.apellidos && <p style={{ color: "red" }}>{errores.apellidos}</p>}
            </div>
            <div>
              <label>Email: <input type="email" name="email" placeholder="Escriba su email" maxLength="50" onChange={handleChange} className={errores.email ? "errorStyle" : null}></input></label>
              {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
            </div>
        </fieldset>
        <fieldset>   
            <legend>Mensaje</legend>
            <div style={{width: "100%"}}>
            <textarea name="mensaje" id="formMensaje" placeholder="Escriba aquí su mensaje" maxLength="500" onChange={handleChange}></textarea>
              {errores.mensaje && <p style={{ color: "red" }}>{errores.mensaje}</p> }
            </div>
        </fieldset>
        <button type="submit">Enviar</button>
    </form>
  )
}

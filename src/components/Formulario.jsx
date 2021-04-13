import { useState } from "react";
import Error from "./Error";

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
 

  // state para error
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validad
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }

    

    guardarError(false);


    guardarConsultar(true)
  };

  //cuando el usuario da submit al formulario
  return (
    <form onSubmit={handleSubmit}>
      
      {error ? <Error mensaje = "¡Todos los campos son requeridos!"/> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={
            handleChange
          } /* cuando el usuario le da submit, handle, 
        llama la funcion que guarda los datos en el state  */
        />
        <label htmlFor="ciudad"> Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">--Seleccione un País--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais"> País:</label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect purple-text text-darken-2 waves-light  btn-large btn-block yellow accent-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};

export default Formulario;

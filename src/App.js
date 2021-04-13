import Error from "./components/Error";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { Fragment, useState, useEffect } from "react";

function App() {
  // state
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  // state de la consuta
  const [consultar, guardarConsultar] = useState(false);

  //state para el resultado
  const [resultado, guardarResultado] = useState({});

  //state para error cuando no encuentra ciudad
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {
      // si consultar es true ejecuta el codigo si no no ejecuta nada, ademas que inicia en false consultar
      if (consultar) {
        const appId = "d84995d373a42e7c8a3d950ae80c6368";

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}, ${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        // detecta si hay resultados en la busqueda

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarApi();
    //eslint-disable-next-line
  }, [consultar]);

  // si hay un error
  //carga condicional de componentes
  let componente;

  if(error) {
    componente = <Error mensaje="No hay resultados :'("/>;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo="Clima React Api" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

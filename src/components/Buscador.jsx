import React from "react";
import { useState } from "react";

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  //buscar peli en el localStorage
  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value); //target para cargar auto mientras se escribe

    //Obtengo listado de pelis importando listadoState del comp Listado en Buscador

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      /*Metodo include determina si el array(string) incluye un determinado elemento,
        Si lo incluye, entonces la peli esta encontrada y se filtra en el array pelis_encon*/
      return peli.title.toLowerCase().includes( busqueda.toLocaleLowerCase() );
    });

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      /*Si solo tiene 1 letra o ninguna que me muestre todo el listado de pelis
        del localStorage*/
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));

      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }
    
    
    

    // Comprobar si hay un resultado

    // Dar valor de todo en localStorage

    // Actualizar/setear con lo que logrado filtrar para mostrar por pantalla
    setListadoState(pelis_encontradas);

  }
  

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {(noEncontrado === true && busqueda.length > 1) && (
        <span className="no-encontrado">No hay coincidencias</span>
      )}
      
      <form>
        <input type="text"
               id="search_field"
               name="busqueda"
               autoComplete="off"
               //value={busqueda}
               onChange={buscarPeli} />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

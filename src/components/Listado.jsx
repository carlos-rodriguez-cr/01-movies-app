import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Editar } from "./Editar";

//Recibir las 2 props listadoState y set de app.js
export const Listado = ({listadoState, setListadoState}) => {

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    
    getPeliculas();
  }, []);

  const getPeliculas = () => {
    //JSON.parse para convertirlo en un objeto usable en js
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas); //set muestra por pantalla, actualiza la info

    return peliculas;

    //console.log(peliculas);
  };

  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas
    let pelis_almacenadas = getPeliculas();

    //Filtrar esas peliculas para que elimine del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //Actualizar estado del listado
    setListadoState(nuevo_array_pelis)

    //Actualizar datos en localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))




    //alert(id);
  }

  return (
    <>
    {/*Condicion ternaria, si listado no esta vacio ? ejecuta el codigo
      : sino ejecuta el h2 mostrando que no hay pelis */}
      {listadoState != null ?
       listadoState.map((peli) => {

        return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.title}</h3>
            <p className="description">{peli.description}</p>

            <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
            {/*De debe borrar del localStorage */}
            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

            {/*Aparece formulario de editar */}
            {editar === peli.id && (
              <Editar peli={peli}
                      getPeliculas={getPeliculas}
                      setEditar={setEditar}
                      setListadoState={setListadoState}/>

            )}

          </article>
        );

        })
      : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  );
};

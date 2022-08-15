import React from "react";
import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState }) => {

    const titleComponent = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        title: '',
        description: ''
    });

    const {title, description} = peliState;

    

    const conseguirDatosForm = e => {
        e.preventDefault(); //evitar que refresque la pantalla al enviar datosnpmstart

        //Conseguir datos del form
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;


        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            title,
            description
        };

        // Guardar estado para reflejar cambios
        setPeliState(peli);

        //Actualizar el estado del listado
        setListadoState(elementos => {

          //Agregar a los elementos que ya habia un nuevo elemento
          return [...elementos, peli]; 
        })

        // Guardar en el almacenamiento local helper
        GuardarEnStorage("pelis", peli);



        //console.log(peliState);
    }

    

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {(title && description) && "Has creado la pelicula: " +title}
      </strong>
      

      <form onSubmit={conseguirDatosForm}>
        <input type="text" 
               id="title" 
               placeholder="Titulo" />

        <textarea 
                id="description" 
                name="description"
                placeholder="Descripción"></textarea>
        <input type="submit" 
                id="save" 
                value="Guardar" />
      </form>

    </div>
  );
};

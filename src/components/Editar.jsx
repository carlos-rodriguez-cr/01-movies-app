import React from 'react'

export const Editar = ({peli, getPeliculas, setEditar, setListadoState}) => {

  const title_component = "Editar pelicula";

  const guardarEdicion = (e,id) => {
    e.preventDefault();

    // Conseguir el target del evento, conseguir el form
    let target = e.target;

    // Buscar el indice del objeto de la peli a actualizar
    const pelis_almacenadas = getPeliculas();
    //Si peli.id es igual al id de la peli que quiero actualizar, devolver valor del id a actualizar
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
    

    //Crear objeto con ese indice/id, con titulo y descrip del form, va a buscar los valores del "name" del form
    let peli_update = {
      id,
      title: target.title.value,
      description: target.description.value
    };
    //console.log(indice, peli_update);

    // Actualizar el elemento con ese id
    pelis_almacenadas[indice] = peli_update;
    //console.log(pelis_almacenadas);

    //Guardar el nuevo array de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

    // Actualizar estados,editar y listadoState
    setListadoState(pelis_almacenadas);
    setEditar(0); //cierra el formulario de editar una vez apretado el boton


    
  }

  return (
    <div className='edit_form'>
      <h3 className='title'>{title_component}:</h3>

      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input type="text"
               name="title" 
               className="titulo_editado" 
               defaultValue={peli.title}/>

        <textarea name="description" 
                  defaultValue={peli.description} 
                  className="descripcion_editada" />

        <input type="submit" className="editar" value="Actualizar" />
      </form>

    </div>
  )
}

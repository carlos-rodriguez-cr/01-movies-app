export const GuardarEnStorage = (key, elemento) => {
    //Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(key));

    console.log(elementos);

    // Comprobar si es un array
    if(Array.isArray(elementos)){
      // Agregar un elemento nuevo al array metodo push
      elementos.push(elemento);
    }else{
      // Crear un array con el nuevo elemento
      elementos = [elemento];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    // Devolver objeto guardado
    return elemento;
  }
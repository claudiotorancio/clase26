//Contenedores disponivles
const containerTarjetas = document.querySelector('[data-tarjetas');
const cuerpoModal = document.querySelector('.modal-contenido');

if (containerTarjetas) {
  //Vaciar el contenedor antesd e render
  containerTarjetas.innerHTML = '';

  //Recorrer los datos
  for (const dato of datos) {

    //Creacion del elemento div
    const card = document.createElement('div');

    card.innerHTML = `
                <section type="button" class="card" " data-bs-toggle="dialog"
                        data-bs-target="#myDialog">
                        <img src="${dato.imagen}" class="card-img-top" alt="..." data-imagen>
                        <div class="card-body text-center">
                            <h4 class="card-title" data-titulo>${dato.titulo}</h4>
                        </div>
                        <div class="text-center p-5">${dato.descripcion}</div>
                </section>
                  `
    containerTarjetas.appendChild(card); //Agregar al contendio existente

    // evento para mostrar el modal
    card.querySelector('[data-bs-target]').addEventListener('click', (e) => {

      e.preventDefault()

      const contenido = `
            <!-- Encabezado y boton cerrar -->
            <div class="dialog-header flex-column py-3">
                <button type="button" class="btn-close" data-bs-dismiss="dialog" aria-label="Close"></button>
                 <!-- Lineas y titulo -->
                  <div>
                      <h2>${dato.titulo}</h2>
                  </div>
                    <div class="d-flex gap-2 align-items-center py-6">
                        <div class="line"></div>
                        <i class="fa-solid fa-star fa-lg"></i>
                    <div class="line"></div>
            </div>
          </div>
             <div class= 'modal-body text-center'>
                    <img src="${dato.imagen}" class="img-fluid"  alt="..." data-imagen>        
                    <p>${dato.descripcion}</p>
            </div>
        <div class="dialog-footer justify-content-center">
          <a type="button"  href="${dato.url}" target="_blank" class="btn-solid theme-inverse btn-outline"><i class="fa-solid fa-arrow-up-right-from-square"></i>Visitar Sitio</a>
        </div>`

      cuerpoModal.innerHTML = contenido; //anexar el contenido al contenedor del modal
    });

  };

} else {
  console.log('No hay contenedor para rendrizar');
};





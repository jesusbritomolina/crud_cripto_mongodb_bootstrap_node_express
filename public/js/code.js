const modalCripto = new bootstrap.Modal(document.getElementById('modalCripto'))
// Definido el metodo on para capturar los datos con JS
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
// Usamos el metodo on que va a capturar los datos q queremos editar
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    precio_editar.value = fila.children[2].innerHTML
    simbolo_editar.value = fila.children[3].innerHTML
    imagen_muestra.src = fila.children[4].firstChild.nextElementSibling.src
    modalCripto.show()
})
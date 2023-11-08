let cajaVerde = document.querySelectorAll(".dragtarget")
let cajaAzul = document.querySelector("#droptarget")
let carro = document.querySelector("#carro")

///Comprobar que funciona
// cajaVerde.addEventListener("click", () => {
//   console.log("div verde");
// })
cajaAzul.addEventListener("click", () => {
  carro.classList.toggle("visible")
  // console.log("div azul");
})

let text = ""
let itemArrastrado = null
cajaVerde.forEach( caja => {
  caja.addEventListener("dragstart",(e)=> {
    itemArrastrado = e.target
    text = e.target.textContent;
    // console.log(itemArrastrado);
  })
})
//Eventos drag para el elemento arrastrable
// cajaVerde.addEventListener('dragstart', (e) => {
//   // Transferir informacion al elemento Drop
//   // e.dataTransfer.setData("text/plain", "caja verde")
//   console.log("Evento DragStart");
//   itemArrastrado = e.target
//   console.log(itemArrastrado);
// });
// cajaVerde.addEventListener('drag', (e) => {
//   console.log("Drag");
// });
// cajaVerde.addEventListener('dragend', (e) => {
//   console.log("Evento DragEnd");
// });

//Eventos para el elemento que puede recibir a otro que sea arrastrable
cajaAzul.addEventListener('dragenter', (e) => {
  e.preventDefault()
  console.log("Evento DragEnter");
});
cajaAzul.addEventListener('dragover', (e) => {
  e.preventDefault()
  console.log("Evento DragOver");
});
cajaAzul.addEventListener('drop', (e) => {
  // e.preventDefault();
  // Mostrar informacion del elemento arrastrado 
  // const dragged = e.dataTransfer.getData("text/plain");
  // console.log("Información caja verde: " + dragged);
  // console.log(e.target);
  // console.log("Dropping");
  console.log(itemArrastrado);
  let span = document.createElement("span")
  span.innerHTML = itemArrastrado.textContent
  carro.appendChild(span);
  itemArrastrado.innerHTML = ""
  e.target.textContent = text;
});
cajaAzul.addEventListener('dragleave', (e) => {
  console.log("Leaving");
});
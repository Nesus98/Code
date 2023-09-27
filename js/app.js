//seleccionar elementos desde js
let nav = document.querySelector("nav");
console.log(nav);

//seleccionar elemento con clase
let active = document.querySelector(".active");
console.log(active)

//Seleccionar multiples elementos con la misma etiqueta
let headersAndParagraphs = document.querySelectorAll("p, h1");
console.log(headersAndParagraphs[0].innerText)
//Se accede a un elemento con los corchetes y a su contenido con .innerText

//Accediendo a elementos hijos median children[numHijo]
console.log(nav.children[0].children[0].children[0]);

// console.log(nav.firstElementChild.firstElementChild.firstElementChild.parentNode.nextElementSibling.firstElementChild.firstChild.parentNode);

console.log(headersAndParagraphs[2]);
console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling.nextElementSibling.innerText);

let main = document.querySelector("#first");
console.log(main);

console.log(nav.firstElementChild.lastElementChild.firstChild);

console.log(nav.firstElementChild.childElementCount);
console.log(nav.firstElementChild.children.length);
console.log(nav.firstElementChild.childNodes);
console.log(nav.firstElementChild.firstChild.nodeValue);
console.log(nav.firstElementChild.nodeName);
console.log(nav.firstElementChild.firstChild.nextSibling);
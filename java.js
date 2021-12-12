function listaFija(respuesta) {
console.log(respuesta);

    for (i=0 ; i < 6 ; i++){
        const cajaUsuario = document.createElement("div");
        const imagenUsuario = document.createElement("img");
        const nombreUsuario = document.createElement("p");
        const contenedorUsuarios = document.querySelector(".contenedorUsuarios");
        
        nombreUsuario.classList.add("nombreUsuario");
        cajaUsuario.classList.add("cajaUsuario");
        imagenUsuario.classList.add("imagenUsuario");
        imagenUsuario.setAttribute("src",respuesta.data[i].avatar);
        nombreUsuario.innerHTML = respuesta.data[i].first_name + " " + respuesta.data[i].last_name;

        cajaUsuario.appendChild(imagenUsuario);
        cajaUsuario.appendChild(nombreUsuario);
        contenedorUsuarios.appendChild(cajaUsuario);
}
};

let x=0
function agregarUsuario(respuesta2){
    console.log(respuesta2)
     
        const cajaUsuario = document.createElement("div");
        const imagenUsuario = document.createElement("img");
        const nombreUsuario = document.createElement("p");
        const contenedorUsuarios = document.querySelector(".contenedorUsuarios");
        
        nombreUsuario.classList.add("nombreUsuario");
        cajaUsuario.classList.add("cajaUsuario");
        imagenUsuario.classList.add("imagenUsuario");
        imagenUsuario.setAttribute("src",respuesta2.data[x].avatar);
        nombreUsuario.innerHTML = respuesta2.data[x].first_name + " " + respuesta2.data[x].last_name;

        cajaUsuario.appendChild(imagenUsuario);
        cajaUsuario.appendChild(nombreUsuario);
        contenedorUsuarios.appendChild(cajaUsuario);
        x++;
};

let promesaPag1 = new Promise(function(resolve, reject) {
    let peticion;

    if (window.XMLHttpRequest) peticion = new XMLHttpRequest ();
    else peticion = new ActiveXObject("Microsoft.XMLHTTP");

    peticion.open("GET", "https://reqres.in/api/users?page=1", true);
    
    peticion.addEventListener("load", ()=>{
        if (peticion.status == 200 || peticion.status == 201) {
            resolve(JSON.parse(peticion.response));
        } else {
            reject("Lo siento, no se ha encontrado el recurso")
        };
    })

    peticion.setRequestHeader("Content-type","application/json;charset=UTF8");

    peticion.send();
});

let promesaPag2 = new Promise(function(resolve, reject) {
    let peticion;

    if (window.XMLHttpRequest) peticion = new XMLHttpRequest ();
    else peticion = new ActiveXObject("Microsoft.XMLHTTP");

    peticion.open("GET", "https://reqres.in/api/users?page=2", true);
    
    peticion.addEventListener("load", ()=>{
        if (peticion.status == 200 || peticion.status == 201) {
            resolve(JSON.parse(peticion.response));
        } else {
            reject("Lo siento, no se ha encontrado el recurso")
        };
    })

    peticion.setRequestHeader("Content-type","application/json;charset=UTF8");

    peticion.send()
});

promesaPag1.then(listaFija)
.catch((err) =>{console.log(err)});

const boton = document.querySelector(".boton");

boton.onclick = function(){
promesaPag2.then(agregarUsuario)
.catch((err) =>{console.log(err)});};
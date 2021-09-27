import fs from 'fs'
//let fs= require('fs')
const tareas = require('./tarea.json');

const Listar = () => {
    tareas.forEach(function(tarea){
        console.log( tarea.titulo +"," +tarea.estado )
    });
}

const EscribirjSON = (array) =>{
    const arrayJSON = JSON.stringify(array)
    fs.writeFileSync('./tareas.json',arrayJSON,null,4)
}
const LeerjSON = ()=> {
    return JSON.parse(fs.readFileSync('./tareas.json'));
}
const GuardarTarea = (titulo, estado,)=>{
    let db = LeerjSON()
    const tareaNueva ={
        titulo : titulo,
        estado : estado,
    };
    db.push(tareaNueva);
    EscribirjSON(db);
}

const FiltrarPorEstado = (estado)=>{
    let bd = LeerjSON();
    let filtrada = bd.filter(item => item.estado == estado)
    filtrada.forEach(filtrada => console.log( filtrada.titulo +"," +filtrada.estado ));
}

module.exports = {Listar,EscribirjSON, GuardarTarea, FiltrarPorEstado}
//


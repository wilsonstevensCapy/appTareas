
const tareas= require('./funciones.js')
const tituloNueva = process.argv[3];
const estadoNueva = process.argv[4];
const estado = process.argv[3];
const listar = process.argv[2];

switch(listar){
    case 'listar' :
       tareas.Listar();
        break;
    case undefined:
        console.log('Atención: Tienes que pasar una acción');
        break;
    case 'crear':
        tareas.GuardarTarea(tituloNueva,estadoNueva);
        break
    case 'filtrar' :
            tareas.FiltrarPorEstado(estado);
        break
    default:
        console.log('No entiendo que quieres hacer');
    break
}
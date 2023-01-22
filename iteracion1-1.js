//TERMINADO

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael')
    .then(resultado => resultado.json())
    .then(resultado => {
        console.log('Este es el relsultado');
        console.log(resultado);
    }) 
    .catch(resultado =>{
        console.log('Algo ha fallado') 
        console.log(error);   
    });

    //con async await. EN ESTE CASO, LA URL LA HE PUESTO MAL PARA QUE DE ERROR!
    async function obtenerDatos(){
        try{
        const respuesta= await fetch('https://api.aify.io?name=michael');
        const datosRespuesta = await respuesta.json();
        console.log(datosRespuesta);
        }
        catch(error){
            console.log('Algo ha fallado');
            console.log(error);
        }
    }

    obtenerDatos();
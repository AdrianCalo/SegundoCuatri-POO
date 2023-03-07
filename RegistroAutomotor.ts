// implementamos la clase RegistroAutomotor debe soportar → 

import { Car } from "./Car";

//mostrar stock/consultar/borrar/actualziar/DarDeAlta
export class RegistroAutomotor{
    stock(array:Car[]){
        console.log(array)
    }
    
    consultar( auto:string,array:Car[]){ 
        //console.log(auto,array)
        let foundCar:Car[]= array.filter(elemento => (elemento['marca']=== auto) || (elemento['model']=== auto) || (elemento['engine']=== auto)||(elemento['año'] === auto));
        if(foundCar.length){
            console.log(`el vehiculo ${auto} ha sido encontrado`);
            console.log(foundCar);
            //foundCar.forEach((item:any) => console.log(item));
            return foundCar;
        }else{
            console.log("no se encontro el tipo de vehiculo especificado")
        }
    }
    borrar(auto:string, array:Car[]){
        let foundCar:number= array.findIndex(auto => (array['marca']=== auto) || (array['model']=== auto) || (array['engine']=== auto) || (array['año']=== auto));
        if(foundCar){
            array.splice(foundCar,1)
            console.log(auto,'fue eliminado de la lista')
            console.log(array);
        }else{
            console.log(auto, 'no ha sido eliminado')
        }
    }

    Modifica(auto:string, array:Car[],dato:any){
        let modificar= this.consultar(auto,array); 
        if(modificar){
            modificar.auto = dato;
            console.log(`el vehiculo ${auto} a sido modificado por ${dato}`) 
        }else{
            console.log('no se a realizado ninguna modificacion');
        }
    
    }
   
    actualizar(array:Car[]){
        let newCar= JSON.stringify(array);// se cra una variable la cual tomara el vaor de los obejtos que estan en el array convirtiendolos a texto 
        fs.writeFileSync("./BaseDatosAuto.json",newCar,"utf8")
    }

    DarDeAlta(auto:Car, array:Car[]){
        array.push(auto)
    }

}
//    saludo(){
//        console.log("hola")
//    }
//}
//export default RegistroAutomotor;
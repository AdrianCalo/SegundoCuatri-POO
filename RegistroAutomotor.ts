// implementamos la clase RegistroAutomotor debe soportar → 

import { Car } from "./Car";

//mostrar stock/consultar/borrar/actualziar/DarDeAlta
export class RegistroAutomotor{
    stock(array:Car[]){
        console.log(array)
    }
    
    consultar( auto:string,array:Car[]){ 
        let foundCar:Car[]= array.filter(auto => (array['marca']=== auto) || (array['model']=== auto) || (array['engine']=== auto) || (array['año']=== auto));
        if(foundCar){
            foundCar.forEach((item:any) => console.log(item));
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

    
    actualziar(auto:string, array:Car[],dato:any){
        const modificar= array.filter(auto => (array['marca']=== auto) || (array['model']=== auto) || (array['engine']=== auto) || (array['año']=== auto));//this.consultar(auto:string, array:Car[])
        if(modificar){
            dato=modificar;
            console.log(`el vehiculo ${auto} a sido modificado por ${dato}`) 
        }else{
            console.log('no se a realizado ninguna modificacion');
        }

    }
    DarDeAlta(auto:Car, array:Car[]){
        array.push(auto)
    }
}
//export default RegistroAutomotor;
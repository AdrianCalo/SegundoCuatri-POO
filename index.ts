import * as fs from 'fs'
import { Car } from './Car'
import {RegistroAutomotor}  from './RegistroAutomotor'

let agencia:[]= []; 

try{
    const data= fs.readFileSync("./BaseDatosAuto.json", "utf8");
    const jsonFile= JSON.parse(data);//.parse() convierte texto a objeto
    agencia=jsonFile.map((item:any)=>item);
}catch (error){}

let camioneta=new Car('Ford','renger','2.2 turbo disel',2018);

const registro= new RegistroAutomotor;

registro.consultar("falcon",agencia);
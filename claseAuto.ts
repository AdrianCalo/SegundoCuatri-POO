class Car{
    
    private marca:string;
    private model:string;
    private engine:string;
    private isOn:bolean=false;
    private speed:number=0;
    private gear:number=0;
    private dominio: string;

    constructor(marca:string,model:string,engine:string,dominio:string){
        this.marca=marca;
        this.model=model;
        this.engine=engine;
        this.dominio=dominio;
    }
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      } 

    switchOnOff(): void{
        this.isOn=!this.isOn;
        if(this.isOn){
            console.log(`el auto ${this.marca} esta encendido`)
        }
    }

    manejo(): String{  //preguntar si esta bien que sea string
    switch (gear) {    //si el swich va como parametro?     
        case 1:         //y algo mas que se te ocurra
            this.speed= getRandomArbitrary(1, 20)
            console.log(`la velocidad es ${this.speed} km/h`);
            break;
        case 2:
            this.speed= getRandomArbitrary(20,45)
            console.log(`la velocidad es ${this.speed} km/h`)
            break;
        case 3:
            this.speed= getRandomArbitrary(45,70)
            console.log(`la velocidad es ${this.speed} km/h`)
            break;
        case 4:
            this.speed= getRandomArbitrary(70,100)
            console.log(`la velocidad es ${this.speed} km/h`)
            break;
        case 5:
            this.speed= getRandomArbitrary(100,135)
            console.log(`la velocidad es ${this.speed} km/h`)
            break;
        case 6:
            this.speed= getRandomArbitrary(135,200)
            console.log(`la velocidad es ${this.speed} km/h`)
            break;
        default: console.log("el auto no tiene mas cambios capo!")
            break;
        } 
    }

    brake(): String{ //gear no va como parametro aca??
        this.gear-- 
        return manejo //debo retonar manejo de esta forma?? 
    }

    reversa(): String{
        this.gear=0
        this.speed=0
        return 'usted puso reversa'
    }
}

const auto1= new Car(peugueot,'307','disel 2.0','FGB 504');
console.log(auto1);
switchOnOff();
manejo(1);
menejo(2);
menejo(3);
brake();
brake();
menejo(2);
menejo(3);
menejo(4);
menejo(5);
manejo(6);
manejo(7);
brake();
brake();
brake();
brake();
brake();
brake();
reversa();
switchOnOff()

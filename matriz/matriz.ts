//• Implementar la clase Matriz. En vez de consultar 
//los valores con los corchetes, se debe hacer 
//(desde afuera) a través de un método → get(x, y)

export default class Matriz{
    private matriz:number[][];

    constructor(){
        this.matriz=[[1,2,3],[4,5,6],[7,8,9],[10,10,10]]
    }
    get(x:number, y:number){
        //let contador:number =0;
        let xLength:number=this.matriz.length;
        let yLength:number= this.matriz[0].length;

        if(x>=0 && y>=0 && x< xLength && y< yLength){
            let buscaNum:number= this.matriz[x][y];
            console.table(this.matriz)
            console.log(`el numero ${buscaNum} se encontro en x:${x} y:${y}`)
            return buscaNum
        }else{
            console.log(`error, el indice x${x} y${y} no existe`)
        }
    }
    
}
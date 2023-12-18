import { ThisReceiver } from "@angular/compiler";

export abstract class figuraGeometrica{
    nombre:string
    constructor(nombre:string){
        this.nombre = nombre
    }



    abstract calcularPerimetro():number
}

export class trianguloEscaleno {
     
     
     
     ladoA:number;
     ladoB: number;
     ladoC: number;
     

     constructor(ladoA:number, ladoB:number, ladoC:number ){
        //super(nombre)
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
       
     }
      calcularPerimetroO(): number {
       return  (this.ladoA + this.ladoB + this.ladoC);
    }
   
}

export class circulo{
    radio:number;

    constructor(radio:number){
        this.radio = radio;
    }

    calcularRadio(): number{
        return 2* Math.PI *this.radio
    }
}

export class trianguloEquilatero{

}


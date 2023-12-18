import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput,IonButton, IonCard, IonCardHeader, IonCardTitle,IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { trianguloEquilatero, trianguloEscaleno } from '../modelo/figuras';
import { partition } from 'rxjs';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule,IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle,IonCardSubtitle, IonCardContent]
})
export class TrianguloComponent  implements OnInit {
  ladoATrianguloStr:string = ""
  ladoBTrianguloStr:string = ""
  ladoCTrianguloStr:string = ""
  
  constructor() { }

  ngOnInit() {}

  calcularPerimetroTriangulo() {
    const medidasParseadas = parseInt(this.ladoATrianguloStr)
    const medidasParseadasB = parseInt(this.ladoBTrianguloStr)
    const medidasParseadasC = parseInt(this.ladoCTrianguloStr)
    const figuras = new trianguloEscaleno(medidasParseadas , medidasParseadasB, medidasParseadasC)
    const resultado = figuras.calcularPerimetroO()
    this.ladoATrianguloStr = `El perimetro  es del triangulo escaleno es =  ${resultado}`
    }

}

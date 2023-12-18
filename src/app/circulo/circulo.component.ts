import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonItem,IonInput, IonButton,IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,  } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { circulo } from '../modelo/figuras';



@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,TrianguloComponent,CirculoComponent, IonSelect, IonSelectOption,IonList ,IonItem, CommonModule, IonInput, FormsModule, IonButton,IonCard,IonImg,IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent  ],
})
export class CirculoComponent  {

  ladoCCirculoStr:string=""
  resultadoRadio:string=""

  constructor() { }

  ngOnInit() {}

  calcularPerimetroCirculo() {
    
    const parseoRadio = parseInt(this.ladoCCirculoStr)
    const figuras = new circulo(parseoRadio)
    const resultadoRadio = figuras.calcularRadio()
    this.ladoCCirculoStr = `El radio del Circulo es : ${resultadoRadio}` 

    }

}

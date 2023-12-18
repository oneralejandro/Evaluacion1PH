import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonItem, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';
import { CommonModule } from '@angular/common';
import { IonSelectCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,TrianguloComponent,CirculoComponent, IonSelect, IonSelectOption,IonList ,IonItem, CommonModule],
})
export class HomePage {

  componente:string ="" //guarda el componenete q se encuentra seleccionado actualmente 
  constructor() {}

  mostrarCompTriangulo():boolean {
    return this.componente == "triangulo"

  }

  mostrarCompCirculo():boolean{
    return this.componente == "circulo"

  }

  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.componente = $event.detail.value
    }

}

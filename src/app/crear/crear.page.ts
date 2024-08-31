import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {


  customCounterFormatter(inputLenght: number, maxLength: number){
    return `${maxLength - inputLenght} /20`;
  }


  usuario={
    nombre: "",
    correo: "",
    numero: "",
    password: ""
  }

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    console.log("submit")
    console.log(this.usuario)
  }

}

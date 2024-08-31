import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  customCounterFormatter(inputLenght: number, maxLength: number){
    return `${maxLength - inputLenght} /20`;
  }

  usuario={
    correo: "",
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

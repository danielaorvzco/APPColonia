import { Component, OnInit, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  usuarioCuenta={
    nombre: "Unkwon",
    imgURL: "/assets/perfilMujer.png",
    email: "@@@"
  }

  constructor() { }

  ngOnInit() {
  }

}

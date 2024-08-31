import { Component, OnInit, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  @ViewChild(IonModal)
  modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }


  post={
    asunto: "",
    mensaje: "",
    dia: "",
  }

  evento={
    tipo: "",
    diaE: "",
    descripcion: "",
  }

  constructor( private modalCtrl: ModalController) { }

  cancela() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirma() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  ngOnInit() {
  }

  // onSubmit(){
  //   console.log("submit")
  //   console.log(this.post)
  // }

}

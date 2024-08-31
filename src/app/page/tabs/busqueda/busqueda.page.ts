import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  
   handleRefresh(event: { target: { complete: () => void; }; }) {
     setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
     }, 2000);
   }

  // public data = [
  //   'Publicación',
  //   'Eventos',
  //   'Reunión',
  //   'Riesgo',
  //   'Asalto',
  //   'Basura',
  //   'Parque',
  //   'Ayuda',
  //   'Posada',
  //   'Invitación',
  // ];
  // public results = [...this.data];

  // handleInput(event: { target: { value: string; }; }) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  // }

  constructor() { }

  ngOnInit() {
  }

}

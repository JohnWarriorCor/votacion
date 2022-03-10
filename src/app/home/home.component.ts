import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  key: any;

  vistaTarjeton = true;

  acceso = true
  reporte = false;
  clave = false;

  closeResult: string;

  personero1 = 1;
  personero2 = 2;
  blancoPersonero = 3;

  contralor1 = 1;
  contralor2 = 2;
  blancoContralor = 3;

  votoPersonero1 = 0;
  votoPersonero2 = 0;
  votoBlancoPersonero = 0;

  votoContralor1 = 0;
  votoContralor2 = 0;
  votoBlancoContralor = 0;
  votosTotales = 0;

  constructor(private modalService: NgbModal) { }
  votoPersonero(candidato) {
    switch (candidato) {
      case 1: {
        this.votoPersonero1 = this.votoPersonero1 + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Recuerda elegir un contralor.',
          icon: 'warning',
          buttons: ['Elegir contralor',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
      case 2: {
        this.votoPersonero2 = this.votoPersonero2 + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Recuerda elegir un contralor.',
          icon: 'warning',
          buttons: ['Elegir contralor',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
      case 3: {
        this.votoBlancoPersonero = this.votoBlancoPersonero + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Recuerda elegir un contralor.',
          icon: 'warning',
          buttons: ['Elegir contralor',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
    }
  }
  votoContralor(candidato) {
    switch (candidato) {
      case 1: {
        this.votoContralor1 = this.votoContralor1 + 1;
        this.votosTotales = this.votosTotales + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Fin del proceso, tu participación es muy importante.',
          icon: 'success',
          buttons: ['Finalizar voto',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
      case 2: {
        this.votoContralor2 = this.votoContralor2 + 1;
        this.votosTotales = this.votosTotales + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Fin del proceso, tu participación es muy importante.',
          icon: 'success',
          buttons: ['Finalizar voto',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
      case 3: {
        this.votoBlancoContralor = this.votoBlancoContralor + 1;
        this.votosTotales = this.votosTotales + 1;
        swal({
          title: '¡Gracias por tu voto!',
          text: 'Fin del proceso, tu participación es muy importante.',
          icon: 'success',
          buttons: ['Finalizar voto',]
        });
        this.vistaTarjeton = !this.vistaTarjeton;
        break;
      }
    }
  }

  accesoReporte(){
    this.clave = true;
    this.acceso = false;
  }

  pass(key) {
    if (key === '1234') {
      this.reporte = true;
      this.clave = false;
    }
  }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}

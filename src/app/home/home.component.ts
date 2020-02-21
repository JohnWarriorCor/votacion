import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  key: any;
  boton = false;
  input = true;
  closeResult: string;
  participante1 = 1;
  participante2 = 2;
  participante3 = 3;
  participante4 = 4;
  acum1 = 0;
  acum2 = 0;
  acum3 = 0;
  acum4 = 0;
  acumTotal = 0;
  constructor(private modalService: NgbModal) { }
  voto(candidato) {
    switch (candidato) {
      case 1: {
        this.acum1 = this.acum1 + 1;
        this.acumTotal = this.acumTotal + 1;
        break;
      }
      case 2: {
        this.acum2 = this.acum2 + 1;
        this.acumTotal = this.acumTotal + 1;
        break;
      }
      case 3: {
        this.acum3 = this.acum3 + 1;
        this.acumTotal = this.acumTotal + 1;
        break;
      }
      case 4: {
        this.acum4 = this.acum4 + 1;
        this.acumTotal = this.acumTotal + 1;
        break;
      }
    }
  }
  pass(key) {
    if (key === '1234') {
      this.boton = true;
      this.input = false;
    }
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm', centered: true });
  }
  ngOnInit() {
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}

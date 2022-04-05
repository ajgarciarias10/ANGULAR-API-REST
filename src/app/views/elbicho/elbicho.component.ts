import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/miservicio.service';
import { elbicho } from 'src/app/modelo/elbicho.model';

@Component({
  selector: 'app-elbicho',
  templateUrl: './elbicho.component.html',
  styleUrls: ['./elbicho.component.css']
})
export class ELBICHOComponent implements OnInit {
  //hago referencia al bicho
  elbiCho: elbicho[] = [];

  constructor(public usersService: MiservicioService) { }
    ngOnInit(): void {
      this.getCarmelos();
      

    }
    getCarmelos() : void {
      //Funcion getCaremelos en e el que llamas al servicio y utilizas la clave valor para cargarlo en el array declarado arriba
      this.usersService.getTypeofpokemon().subscribe(elbicho => this.elbiCho = elbicho);
    }


}

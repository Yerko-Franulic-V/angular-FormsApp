import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'M'
  };

  objPaisesJSON: Array<Pais> = [
    {
      nombre: 'Argentina',
      codigo: 'ARG',
    },
    {
      nombre: 'Chile',
      codigo: 'CHL',
    },
    {
      nombre: 'Peru',
      codigo: 'PER',
    },
    {
      nombre: 'Bolivia',
      codigo: 'BOL',
    },
    {
      nombre: 'Uruguay',
      codigo: 'URU',
    },
    {
      nombre: 'Paraguay',
      codigo: 'PAR',
    },
  ];

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit() {

    // this.paisService.getPaises().subscribe( paises => {
    //   this.paises = paises;
    //   this.paises.unshift({
    //     nombre: '[Seleccione Pais]',
    //     codigo: '',
    //   });
    //   console.log(this.paises);
    // });

    this.paises = this.objPaisesJSON;
    this.paises.unshift({
      nombre: '[Seleccione Pais]',
      codigo: '',
    });

  }

  guardar(forma: NgForm) {
    console.log(forma);

    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        console.log(control);

        control.markAsTouched();
      });

      return;
    }

    console.log(forma.value);
  }
  
}

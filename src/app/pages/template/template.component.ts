import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  usuario = {
    nombre: 'Yerko',
    apellido: 'Franulic',
    correo: 'yerko.franulic.v@gmail.com'
  }

  guardar(forma: NgForm) {
    console.log(forma);
    console.log(forma.value);
  }

}

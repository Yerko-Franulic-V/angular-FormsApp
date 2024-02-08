import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.crearFormulario();
    this.forma = this.fb.group({
      nombre:   ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo1:  ['', [Validators.required, Validators.email]],
      correo2:  ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      direccion: this.fb.group({
        distrito: ['',Validators.required],
        ciudad:   ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }
  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }
  get correo1NoValido() {
    return this.forma.get('correo1')?.invalid && this.forma.get('correo1')?.touched;
  }
  get correo2NoValido() {
    return this.forma.get('correo2')?.invalid && this.forma.get('correo2')?.touched;
  }
  get distritoNoValido() {
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }
  get ciudadNoValido() {
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre:   [''],
      apellido: [''],
      correo:   [''],
    });
  }

  guardar() {

    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((control) => {
        //console.log(control);

        if( control instanceof FormGroup) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        }else{
          control.markAsTouched();          
        }

      });

      return;
    }

    console.log(this.forma.value);

  }
}

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
//import { __values } from 'tslib';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  forma: FormGroup;

  constructor(private fb: FormBuilder,
              private validadores: ValidadoresService) {
                
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return ( this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched );
  }
  get apellidoNoValido() {
    return ( this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched );
  }
  get correo1NoValido() {
    return ( this.forma.get('correo1')?.invalid && this.forma.get('correo1')?.touched );
  }
  get correo2NoValido() {
    return ( this.forma.get('correo2')?.invalid && this.forma.get('correo2')?.touched );
  }
  get usuarioNoValido() {
    return ( this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched );
  }
  get pass1NoValido() {
    return ( this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched );
  }
  get pass2NoValido() {    
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;

    return ( pass1 === pass2) ? false : true;
    // return ( this.forma.get('pass2')?.invalid && this.forma.get('pass2')?.touched );
  }
  get distritoNoValido() {
    return ( this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched );
  }
  get ciudadNoValido() {
    return ( this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched );
  }
  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre    : ['', [Validators.required, Validators.minLength(5)]],
      apellido  : ['', [Validators.required, this.validadores.noHerrera]],
      correo1   : ['', [Validators.required, Validators.email]],
      correo2   : ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      usuario   : ['', , this.validadores.existeUsuario ],
      pass1     : ['', Validators.required ],
      pass2     : ['', Validators.required],
      direccion : this.fb.group({
        distrito: ['', Validators.required],
        ciudad  : ['', Validators.required],
      }),
      pasatiempos : this.fb.array([
        //[],[],[],[],[]
      ]),
    },{
      Validators: this.validadores.passwordsIguales('pass1','pass2')
    });
  }

  crearListeners(){
  /*
    this.forma.valueChanges.subscribe( valor => {
      console.log(valor);
    });

    this.forma.statusChanges.subscribe( status => console.log({ status }));
  */
    
    this.forma.get('nombre').valueChanges.subscribe( console.log );

  }

  cargarDataAlFormulario() {
    //this.forma.setValue({
    this.forma.reset({
      nombre: 'Yerko',
      apellido: 'Franulic',
      correo1: 'yerko.franulic@gmail.com',
      correo2: 'yerko.franulic@gmail.com',
      direccion: {
        distrito: 'La Cisterna',
        ciudad: 'Santiago',
      },
    });

    ['Comer','Dormir'].forEach(valor => this.pasatiempos.push( this.fb.control(valor) ));
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('') );
  }

  borrarPasatiempo(indice: number){
    this.pasatiempos.removeAt(indice);
  }

  guardar() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((control) => {
        //console.log(control);

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });

      return;
    }

    console.log(this.forma.value);
    this.forma.reset({
      nombre: '',
      apellido: '',
      correo1: '',
      correo2: '',
      pass1: '',
      pass2: '',
      direccion: {
        distrito: '',
        ciudad: '',
      },
    });
    
  }
}

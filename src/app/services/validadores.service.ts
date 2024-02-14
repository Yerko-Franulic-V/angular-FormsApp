import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera( control: FormControl): {[s:string]: boolean}{

    if( control.value?.toLowerCase() === 'herrera2'){
      return { noHerrera: true }
    }
    
    // return null;
    return {noHerrera: false};
  }


  // noFranulich( control: FormControl): boolean{

  //   //return control.value?.toLowerCase() === 'franulich' ? true : false ;
  //   if ( control.value?.toLowerCase() === 'franulich') {
  //     return true;
  //   }
    
  //   return false;    

  // }

}
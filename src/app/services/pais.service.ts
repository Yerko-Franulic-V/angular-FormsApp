import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  getPaises() {
  
    /*
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .pipe(
      map((resp: any[]) => resp.map( pais => ({ nombre: pais.name, codigo: pais.alpha3Code }) ))
    );

    
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe( 
        map( (resp:any[]) => {
          return resp.map( pais => {
            return {
              nombre: pais.name,
              codigo: pais.alpha3Code
            }
          })
        })
       );

       */
  }

  // getPaisesJSON(): Array<Pais> {

  //   const objPaisesJSON: Array<Pais> = [
  //     {
  //       name: 'Argentina',
  //       alpha3code: 'ARG',
  //     },{
  //       name: 'Chile',
  //       alpha3code: 'CHL',
  //     },{
  //       name: 'Peru',
  //       alpha3code: 'PER',
  //     },{
  //       name: 'Bolivia',
  //       alpha3code: 'BOL',
  //     },{
  //       name: 'Uruguay',
  //       alpha3code: 'URU',
  //     },{
  //       name: 'Paraguay',
  //       alpha3code: 'PAR',
  //     }
  //   ];

  //   return objPaisesJSON;
  // }
}

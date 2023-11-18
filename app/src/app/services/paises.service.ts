import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Data, Pais, Traduccion } from './clases';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _url:string="https://restcountries.com/v3.1/all";

  constructor(private http:HttpClient) { }

  getAll():Observable<Pais[]>{
    return this.http.get<any[]>(this._url)
    .pipe(map(t=>t.map(x=>new Pais(
      x.name,
      this.getTranslations(x.translations)
    ))));
  }

  private getTranslations(object:any):Traduccion[]{
     let traducciones:Traduccion[]=[];
     let cont=0;
     for(let key of Object.keys(object)){
      traducciones.push(new Traduccion(key));
     }
     for(let value of Object.values(object)){
        let conversion= value as Data;
        traducciones[cont++].datos=conversion;
     }
     return traducciones;
  }

}

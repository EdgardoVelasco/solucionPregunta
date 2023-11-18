import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';
import { Data, Traduccion } from './services/clases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service:PaisesService){
     this.service.getAll().subscribe({
      next: value=>{
         for(let tmp of value){
           console.log(tmp);
         }
      }
     });
  }
}

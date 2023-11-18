export class Pais{
    name:string;
    traducciones:Traduccion[];

    constructor(name:string, traducciones:any[]){
        this.name=name;
        this.traducciones=traducciones;
    }

}

export class Traduccion{
    name:string;
    private _datos:Data={official:"", common:""};
    constructor(name:string){
      this.name=name;
    }
    set datos(datos:Data){this._datos=datos;}
    get datos():Data{return this._datos;}
}

export interface Data{
    official:string;
    common:string;  
}
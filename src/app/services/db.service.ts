import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from '../modelos/productos';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  public productoslist: Producto[]=[];
  public data;
  public productoEncontrado;

  constructor(public http: HttpClient) { }

  obtenerDatos(){
    return this.http.get('https://demo0370806.mockable.io/');
  }

  buscarProducto(codigo){
    this.obtenerDatos()
    .subscribe(
      (data)=>{
        this.data = data;
        this.productoEncontrado = this.data.find( product => product.codigo === codigo );
        this.productoslist.unshift(this.productoEncontrado);

      },
      (error)=> {console.log(error);}
    );
  }

}

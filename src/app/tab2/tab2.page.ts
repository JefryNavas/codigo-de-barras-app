/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { Producto } from '../modelos/productos';
import { DatalocalService } from '../services/datalocal.service';
import { DbService } from '../services/db.service';
import { ModalPopoverPage } from './../componentes/modal-popover/modal-popover.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  modelData: any;

  constructor(
    public dataLocal: DatalocalService,
    public products: DbService,
    public modalController: ModalController) {

  }

  abrirRegistro(dato){
    console.log('Registro: ',dato);
    this.dataLocal.openRegistro(dato);
  }

  async openIonModal(id) {
    const resultado = this.products.productoslist.find( prod => prod.codigo === id );
    const modal = await this.modalController.create({
      component: ModalPopoverPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre: resultado.nombre,
        precio: resultado.precio,
        informacion: resultado.informacion,
        unidades: resultado.unidades,
        oferta: resultado.oferta,
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {

        this.modelData = modelData.data;
      }
    });
    return await modal.present();

  }

}

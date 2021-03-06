import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {

  @Input() nombre: string;
  @Input() informacion: string;
  @Input() precio: string;
  @Input() unidades: string;
  @Input() oferta: string;

  constructor(private modalController: ModalController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async closeModel() {

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }


}

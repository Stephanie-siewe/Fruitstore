import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test2Page } from '../test2/test2.page';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //   component: Test2Page,
  //   componentProps: { value: 123 }
  //   });
  
  //   await modal.present();
  //   const(role,data) = await modal.onDidDismiss;

  //   if(data:any){
  //     console.log(data);
  //     this.pack.options.receiver  = data
      
  //   }
  
  // }
  // save(){

  // }

}

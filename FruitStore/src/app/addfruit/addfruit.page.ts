import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-addfruit',
  templateUrl: './addfruit.page.html',
  styleUrls: ['./addfruit.page.scss'],
})
export class AddfruitPage implements OnInit {
  genus!:string
  name!:string
  family!:string
  order!:string
  carbohydrates!:number
  protein!:number
  fat!: number
  calories!:number
  sugar!:number
  constructor(private router: Router,private modalCtrl: ModalController ,private db:DbService) { }

  ngOnInit() {
   this.db.initialisation()
  }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
    // this.router.navigate(['/tabs/tab2']);
  }
  async save(){
         this.modalCtrl.dismiss(this.name, 'save');
          this.modalCtrl.dismiss(this.genus, 'save');
          this.modalCtrl.dismiss(this.family, 'save');
          this.modalCtrl.dismiss(this.order, 'save');
          this.modalCtrl.dismiss(this.carbohydrates, 'save');
          this.modalCtrl.dismiss(this.protein, 'save');
          this.modalCtrl.dismiss(this.fat, 'save');
          this.modalCtrl.dismiss(this.calories, 'save');
          this.modalCtrl.dismiss(this.sugar, 'save');

          let id = this.randomEn(100,500);
          
          let fruit = {"genus":this.genus,"name":this.name,"id":id,"family":this.family,"order":this.order,"nutritions":{
            "carbohydrates":this.carbohydrates,"protein":this.protein,"fat":this.fat,"calories":this.calories,"sugar":this.sugar
          }};
           await this.db.create(fruit);
          console.log('fruit',fruit);
          return 1;
          



  }

  randomEn(min:number,max:number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

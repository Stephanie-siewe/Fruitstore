import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { FruitsService } from '../services/fruits.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  fruit:any
  constructor(private router: Router,private db:DbService,private Sfruits:FruitsService) { }


  ngOnInit() {
    this.detail()
  }

  detail(){
  this.fruit =  this.Sfruits.getproduct()
   console.log("fruit",this.fruit);
   
  }

  // delfruit(obj:any){
  //     this.db.delete(obj);
  //     this.router.navigate(['/tabs/tab2']);
  // }



}

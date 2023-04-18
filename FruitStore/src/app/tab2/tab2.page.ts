import { Component } from '@angular/core';
import { FruitsService } from '../services/fruits.service';
import {Network} from "@capacitor/network";
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddfruitPage } from '../addfruit/addfruit.page';
import { DbService } from '../services/db.service';
import { LoadingController } from '@ionic/angular';
import * as internal from 'stream';
import { interval } from 'rxjs/internal/observable/interval';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  choice: number | undefined 
  len  = 0
  fruits:any
  searchTerm!: string;
  connected = false
  results:any
  fruitOff:any
  categories = new Set()
  message = 0
  up:any
  constructor(private loadingCtrl: LoadingController,private db: DbService,private modalCtrl: ModalController, private router:Router,private Sfruits:FruitsService , private actionSheetCtrl:ActionSheetController) {
    // this.getconnection()
   setInterval(()=>{
    this.getconnection();
    
  },1000);

  if(this.Sfruits.getUpdate()== 1){
    this.offline();
    this.up = 1;
    this.Sfruits.viewUpdate(0);

  }


  }

  handleRefresh(event:any) {
    setInterval(() => {
      // Any calls to load data go here
      // event.target.complete();
    }, 2000);
  };


  ionViewDidEnter(){
    this.db.initialisation();
    // this.getFruits();
    // this.getCatogories()
    if(this.Sfruits.getoff() == undefined){
      this.message = 0;
    }else{
      this.message = this.Sfruits.getoff();
    
    }

    if(this.Sfruits.geton() == undefined){
      this.len = 0;
    }else{
      this.len = this.Sfruits.geton();
    
    }

   
  }
 

  ionViewDidLeave(){
    
    
    
  //  this.choice = undefined;
  }


    async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Connection Lost',
      subHeader: 'if you want to see the fruits online then log in and click on Try again',
      mode:"ios",
      buttons: [
        {
          text: 'See your fruits',
          icon:'eye-outline',
          handler:()=>{
            console.log("youpi")
           this.offline()
           console.log("youpi2")
          },
          data: {
            action: 'offline',
          },
        },
        {
          text: 'try again',
          icon:'reload-outline',
          handler:()=>{
           this.online()
           console.log("youpi2")
          },
          data: {
            action: 'online',
          },
        },
        {
          text: 'Return Home',
          icon:'home-outline',
          role: 'cancel',
          handler:()=>{
            console.log("youpi")
           this.router.navigate(['/tabs/tab1']);
           console.log("youpi2")
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    // const result = await actionSheet.onDidDismiss();
    // this.result = JSON.stringify(result, null, 2);
  }


  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000,
      spinner: 'circles',
    });

    loading.present();
  }

  getFruits(){
      this.Sfruits.getFruits().toPromise().then(
        (response) => {this.fruits = response;
                // this.len = this.fruits.length;
                console.log('type of fruit',typeof(this.fruits));
                this.results = response;
        // for(let i=0 ; i<=this.fruits.length;i++){
        //   console.log('fruit', this.fruits[i]['family']);
         
        //     this.categories.add(this.fruits[i]['family']);
         
        //  break
        //  } 
        console.log('response',response);
        console.log(this.categories);
        // (error:any)=> this.error = <any>error
                
        }
      );
          
  } 

  getFruitsOff(){
   this.db.list_fruits().then(
      (response:any)=>{
          this.fruitOff = response;
          this.results = response;
      }
    );
    
    // const interval$  =  interval();
    // interval$.subscribe(value => this.db.list_fruits().then((rep)=>{
    //   this.fruitOff = rep;
    //   this.results = rep;
    // }))

    console.log('fruitsoff', this.fruitOff);


  }

  handleChange(event:any){

    let query = event.target.value.toLowerCase();
    if (this.choice == 1){
      this.results = this.fruits.filter((fruit: { name: string; }) => fruit.name.toLowerCase().indexOf(query)> -1);
      if(this.results[0] == undefined){
        this.results = this.fruits.filter((fruit: { family: string; })=> fruit.family.toLowerCase().indexOf(query)>-1);
      }
    }

    if(this.choice == 2){
        this.results = this.fruitOff.filter((fruit: { name: string; }) => fruit.name.toLowerCase().indexOf(query)> -1);
        if(this.results[0] == undefined){
          this.results = this.fruitOff.filter((fruit: { family: string; })=> fruit.family.toLowerCase().indexOf(query)>-1);
        }
    }
   
    }
  


 

  online(){
    console.log('status connected',this.connected);
    
    if (this.connected != true){
      this.presentActionSheet();
    }else{
      this.getFruits()
      if(this.len == 0){
        this.showLoading()
        this.len = 1;
        this.Sfruits.seton(1);
        // localStorage.setItem('len',toString(this.len))
      }
      
      this.choice = 1; 
      
      
    };
  }

  offline(){
    this.up = 0;
    if(this.message == 0){
      this.showLoading()
      this.message = 1;
       this.Sfruits.setoff(1)
      // localStorage.setItem('message',toString(this.message))
    }
   
    this.getFruitsOff();
    this.choice = 2;
  }


 async getconnection(){
    const status = await Network.getStatus();
    if (status['connected'] == true){
      this.connected = true;
    }else{
      this.connected = false;
    }
    console.log('Network status:', status);
  }

 async openModal(){
      const modal = await this.modalCtrl.create({
        component: AddfruitPage,
      });
      modal.present();
      const {data, role} = await modal.onDidDismiss()
      if(role == 'save'){
          if (data != undefined){
           
          
          }

          this.Sfruits.setoff(1);
          this.Sfruits.viewUpdate(1)
          this.router.navigate(['/tabs/tab2']);  
      }

  }

  detail(obj:any){
   this.Sfruits.setfruits(obj);
   this.router.navigate(['/add']);
  }

}



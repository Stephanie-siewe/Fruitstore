import { Injectable } from '@angular/core';
import{Storage}from'@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private storage:Storage) {

   }


  //  async ngOninit(){
  //   await this.initialisation();
  //  }

async initialisation(){
  await this.storage.create();
  await this.storage.defineDriver(CordovaSQLiteDriver);
  
}


async create(obj:any){
   let fruits = [];
    const rep = await this.storage.get('fruits');
    if(rep){
      fruits = rep;
      console.log('obj',obj);
      
      
  
    }
    fruits.push(obj);
      console.log('fruits',fruits);
      await this.storage.set('fruits',fruits);
    
   ;
    
      
     

        }

async  delete(obj:any){
  let fruits =[];
  const rep = await this.storage.get('fruits');
  if(rep){
    fruits = rep;
    console.log('obj',obj);
  }

  const index = fruits.findIndex((fruit: { id: any; })=> fruit.id ===obj);
  fruits.splice(index);
  await this.storage.set('fruits',fruits);

}
     
    

 
    


async list_fruits(){
  const rep = await this.storage.get('fruits');
  return rep;
}



}

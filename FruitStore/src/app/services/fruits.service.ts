import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  private fruitUrl =  'https://www.fruityvice.com/api/fruit/all'
  fruit:any
  off : any
  on:any
  update:any
  constructor(private http:HttpClient) { }
  
  getFruits(){
    return this.http.get(this.fruitUrl);
  }

  setfruits(obj:any){
     this.fruit = obj;
 }
 getproduct(){
  return this.fruit;
 }

 seton(obj:any){
  this.on = obj;
 }
viewUpdate(obj:number){
  this.update = obj;
}
getUpdate(){
  return this.update;
}

 setoff(obj:any){
  this.off = obj;
 }

 getoff(){
  return this.off;
 }

 geton(){
  return this.on;
 }
 
}

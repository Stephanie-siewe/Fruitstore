import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peach',
  templateUrl: './peach.page.html',
  styleUrls: ['./peach.page.scss'],
})
export class PeachPage implements OnInit {
   paid = false;
  constructor() { }

  ngOnInit() {

  }

  IonViewDidLeave(){
    this.paid = false;
  }

  payment(){
    this.paid = true;
  }

}

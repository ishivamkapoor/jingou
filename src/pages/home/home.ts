import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu=[
    {item:'Stoupid Pizza',img:'',qnty:''},
    {item:'Quinkee',img:'',qnty:''},
    {item:'Puffy Wraps',img:'',qnty:''},
    {item:'Soft Ice Cream',img:'',qnty:''}
  ];
  constructor(public navCtrl: NavController) {

  }

}

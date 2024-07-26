import { Component, OnInit } from '@angular/core';
import { DesigndproService } from '../appService/designdpro.service';

@Component({
  selector: 'app-cardone',
  templateUrl: './cardone.component.html',
  styleUrl: './cardone.component.css'
})
export class CardoneComponent implements OnInit {
  constructor(private _msgservice:DesigndproService){}
  products:any={};
  ngOnInit() {
    // this.products =this._msgservice.product
    this._msgservice.product().subscribe(productData =>this.products = productData)
  }

 btnClick(){
  this._msgservice.messageAlert()
 }
}

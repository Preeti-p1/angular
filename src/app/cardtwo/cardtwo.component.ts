import { Component, OnInit } from '@angular/core';
import {DesigndproService} from '../appService/designdpro.service'

@Component({
  selector: 'app-cardtwo',
  templateUrl: './cardtwo.component.html',
  styleUrl: './cardtwo.component.css'
})
export class CardtwoComponent implements OnInit {
  constructor(private _msgservice:DesigndproService){}
  
   ngOnInit(): void {
  
   }
  btnClick(){
   this._msgservice.messageAlert()
  }
}

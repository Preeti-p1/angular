import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(){}
statusOnline:boolean=true;
products=[
  {name:"Laptop"},
  {name:"Mobile"},
  {name:"Tv"},
  {name:"HeadPhone"},
]
}

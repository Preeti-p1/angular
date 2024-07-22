import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
 
  constructor(){

  }
  ngOnInit(): void {
    
  }


  productSelect: boolean = false;
 selectedItem: string="";
 addProduct:any;
  selectedPoduct(product:string){
    this.productSelect=true;
    this.selectedItem=product;
  }



  onAddedProduct(proData:any){
this.addProduct=proData;
  }
}

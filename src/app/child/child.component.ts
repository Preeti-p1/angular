import { Component, EventEmitter, Input, Output, output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

constructor(){

}


@Input() productSelected: boolean = false;
@Input()selectItem: string="";
@Output() addProduct = new EventEmitter<any>();


onAddProduct(){
  this.addProduct.emit(this.selectItem)  ;
}



}

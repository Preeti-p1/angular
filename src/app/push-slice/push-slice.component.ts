import { Component } from '@angular/core';

@Component({
  selector: 'app-push-slice',
  templateUrl: './push-slice.component.html',
  styleUrl: './push-slice.component.css'
})
export class PushSliceComponent {
users:any=[];

createUser(uname:any){
this.users.push({name:uname.value})

}
deleteUser(){
  this.users.splice(this.users.length-1)
  console.log("deleteUser")
} 
// deleteItem(item:any){
// this.users.splice(item,1)
// console.log("deleteitem")
// }
deleteItem(index: number) {
  this.users.splice(index, 1);
}
}

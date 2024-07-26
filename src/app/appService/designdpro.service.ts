import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesigndproService {

  constructor(private http:HttpClient) {

   }
   messageAlert(){
    alert("Thanks For Subscribtion")
  } 
  // product =[{name:"Preeti",id:"001"},
  //   {name:"Rani",id:"002"},
  //   {name:"Pooja",id:"003"},
  //   {name:"Pinky",id:"004"},
  // ]
  url="https://jsonplaceholder.typicode.com/users"
product():Observable<any>{
return this.http.get(this.url);
}


}

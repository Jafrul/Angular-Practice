import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AaaService {
  constructor(private http: HttpClient) { }
  myData:string;
 configUrl= "http://192.168.1.37:8084/angularService/NewServlet";
method1(){
  let observable:Observable<any>= this.http.get(this.configUrl);
  observable.subscribe(function(data){
    this.myData=data;
  }
  

//  console.log(this.http.get(configUrl));


});
  
getEmployee(){
 // return this.http.get<string>("http://192.168.1.37:8084/angularService/NewServlet");
document.write()
}

}

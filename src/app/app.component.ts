import { Component} from '@angular/core';

import { AaaService } from './aaa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'typescript-project';

  hello:string;


  changeVal(){
    this.aaaService.method1();
    this.hello="Jafrul";

  }

  array = [
    {
      
      age: 32,
      name: 'ddd'
    },
    {
      
      age: 25,
      name: 'dfdfd'
    },
    {
     
      age: 32,
      name: 'sddfdfd'
    },
  ]


  mgOnInit(){
this.hello="jhbfjkhsf";

  }
  
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  constructor(private aaaService:AaaService)
            {



            }
}

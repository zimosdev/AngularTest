import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
   
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent  {
    model: any = {};
    loading = false;
  
    constructor(
     ) { }

  
    login() {
       
        if(this.model.username=="admin" && this.model.password=="admin"){
            console.log("hello admin")
            
        }
        else{
            console.log("error");
        }
            
    }
}
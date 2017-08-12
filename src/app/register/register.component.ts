import { Component } from '@angular/core';

import { AlertService, UserService } from '../_services/index';

import { UIRouter }  from "@uirouter/angular";

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
         private router: UIRouter,
         private userService: UserService,
         
        
       ) { }

    register() {
       this.loading = true;
        this.userService.create(this.model)
         .subscribe(
                data => {
                  
                    console.log("register");
                     this.router.urlRouter;
                    this.loading = false;
                },
                error => {
                 console.log("Not register");
                    this.loading = false;
                });
    }
}
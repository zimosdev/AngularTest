import { Component, NgModule } from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";
import {MaterialModule} from "@angular/material";
import { FormsModule }    from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

/** Components */

@Component({  

   
  template: `  <H1>Hello word !</H1><br/>
            <p>My Frist Application Angular 2 :D</p> `   
  
})
class Home { }

@Component({  

   selector: 'login',
  templateUrl: './login/login.component.html'
  
})
 class Login { }

@Component({ 
  selector: 'register',
  templateUrl: './register/register.component.html'
})
 class Register { }


@Component({ 
  template: '<h3>Its the UI-Router Contact world app!</h3>' 
})
class Contact { }

@Component({ 
  template: '<h3>Its the UI-Router Profil world app!</h3>' 
})
class Profil { }
@Component({ 
  template: '<h3>Its the UI-Router Info world app!</h3>' 
})
class Info { }

@Component({ 
  template: '<h3>Its the UI-Router Connect world app!</h3>' 
})
class Connect { }
@Component({ 
  template: '<h3>Its the UI-Router Phone world app!</h3>' 
})
class Phone { }
/** States */
let homeState = { name: 'home', url: '/',  component: Home }; 
let loginState = { name: 'login', url: 'login',  component: Login }; 
let registerState = { name: 'register', url: 'register',  component: Register };
let contactState = { name: 'contact', url: 'contact',  component: Contact };
let profilState = { name: 'profil', url: 'profil',  component: Profil };
let infoState = { name: 'info', url: 'info',  component: Info };
let connectState = { name: 'connect', url: 'connect',  component: Connect };
let phoneState = { name: 'phone', url: 'phone',  component: Phone };
/** Root Application NgModule */

@NgModule({
  imports: [ 
    BrowserModule,MaterialModule,FormsModule,
    UIRouterModule.forRoot({ states: [homeState, loginState, registerState, contactState, profilState, infoState, connectState, phoneState ], useHash: false })
  ],
  declarations: [ AppComponent,Home, Login, Register, Contact, Profil, Info, Connect,Phone  ],
  bootstrap: [ AppComponent ]
})
class RootAppModule {}

/** Angular 2 bootstrap */

platformBrowserDynamic().bootstrapModule(RootAppModule);




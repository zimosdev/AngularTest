import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule }from '@angular/material';
import { HttpModule  } from '@angular/http';
import { AppComponent }  from './app.component';
//used to create templeate angular/material
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule, MdCheckboxModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
import {UIRouterModule} from "@uirouter/angular";
/* Feature Components */
import { HelloComponent }  from './hello/hello.component';
import { HomeComponent }  from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }   from './register/register.component';
import { NavbarComponent }    from './navbar/navbar.component';
/* App Router */
import { UIRouterConfigFn }   from "./app.router";
import { appStates }          from "./app.states";

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';





import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
         UIRouterModule.forRoot({ 
                      states: appStates,
                      useHash: false,
                      config: UIRouterConfigFn
         }) ,
        HttpModule,
      
        BrowserAnimationsModule,
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
         MdCheckboxModule,
         MaterialModule
     
    ],
        
    declarations: [
        AppComponent,
        NavbarComponent,
        AlertComponent,
        HelloComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
        
    ],
      
  
    providers: [
     
      AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    
       
    ],
    bootstrap: [AppComponent ]
    
})

export class AppModule { }

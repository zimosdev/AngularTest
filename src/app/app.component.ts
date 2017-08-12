import { Component, NgModule } from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";
import {MaterialModule} from "@angular/material";
import { FormsModule }    from '@angular/forms';
import {NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}




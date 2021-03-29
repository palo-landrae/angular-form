import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

import {   //Importare le funzionalità nella nostra applicazione
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent
  ],
  imports: [
    FormsModule,  //Anche qui
    ReactiveFormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

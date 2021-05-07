import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ListPersonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

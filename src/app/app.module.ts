import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';




@NgModule({
  declarations: [
    AppComponent,
    MyContactsComponent,
    FilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

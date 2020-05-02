import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { PrimarybuttonComponent } from './components/primarybutton/primarybutton.component';
import { IconbuttonComponent } from './components/iconbutton/iconbutton.component';
import { ToggleablebuttonComponent } from './components/toggleablebutton/toggleablebutton.component';
import { TitleComponent } from './components/title/title.component';
import { TailwindbuttonpillComponent } from './components/tailwindbuttonpill/tailwindbuttonpill.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PrimarybuttonComponent,
    IconbuttonComponent,
    ToggleablebuttonComponent,
    TitleComponent,
    TailwindbuttonpillComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import StorybookbuttonComponent from './components/storybookbutton/storybookbutton.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';
import { ListComponent } from './components/list/list.component';
import { DisplayTextComponent } from './components/display-fields/display-text/display-text.component';
import { DisplayFieldContainerComponent } from './components/display-fields/display-field-container/display-field-container.component';
import { DisplayBooleanComponent } from './components/display-fields/display-boolean/display-boolean.component';
import { DisplayDateComponent } from './components/display-fields/display-date/display-date.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PrimarybuttonComponent,
    IconbuttonComponent,
    ToggleablebuttonComponent,
    TitleComponent,
    TailwindbuttonpillComponent,
    StorybookbuttonComponent,
    InputboxComponent,
    ListComponent,
    DisplayTextComponent,
    DisplayFieldContainerComponent,
    DisplayBooleanComponent,
    DisplayDateComponent
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

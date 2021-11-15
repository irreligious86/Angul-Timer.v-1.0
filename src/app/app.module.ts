import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { OutputDisplayComponent } from './output-display/output-display.component';
import { OutputDigitComponent } from './output-digit/output-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonGroupComponent,
    OutputDisplayComponent,
    OutputDigitComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

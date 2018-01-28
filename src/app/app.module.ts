import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { EntryService } from './entry.service';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

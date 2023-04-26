import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackupComponent } from './backup/backup.component';
import { HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

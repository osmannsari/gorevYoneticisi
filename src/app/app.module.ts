import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GunlukComponent } from './gunluk/gunluk.component';
import { AylikComponent } from './aylik/aylik.component';
import { SidebarComponent, HeaderComponent, FooterComponent, AppLayoutComponent } from './_layout';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    GunlukComponent,
    AylikComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    jqxSchedulerModule,
   
     CommonModule, 
    
     jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

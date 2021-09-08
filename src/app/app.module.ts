import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NevBarComponent } from './components/nev-bar/nev-bar.component';
import { ContentComponent } from './components/content/content.component';
import { NevBarButtonComponent } from './components/nev-bar-button/nev-bar-button.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NevBarComponent, ContentComponent, NevBarButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

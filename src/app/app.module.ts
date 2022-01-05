import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagensService } from './personagens/personagens.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }

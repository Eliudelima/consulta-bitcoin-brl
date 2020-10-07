import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { RouterModule } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
       
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'github', component: GithubComponent}, 
      {path: 'bitcoin', component: BitcoinComponent}, 
                   
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, GithubComponent, BitcoinComponent ],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinService } from './bitcoin/bitcoin.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
       
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'github', component: GithubComponent}, 
      {path: 'bitcoin', component: BitcoinComponent}, 
                   
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, GithubComponent, BitcoinComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService],
 
})
export class AppModule { }

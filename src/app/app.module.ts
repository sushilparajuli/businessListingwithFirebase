import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAxZIBCvejEHPhFrw9KGIm-UEkLzFLJYKI",
  authDomain: "businesscontacts-c5d45.firebaseapp.com",
  databaseURL: "https://businesscontacts-c5d45.firebaseio.com",
  storageBucket: "businesscontacts-c5d45.appspot.com",
  messagingSenderId: "1063461818493"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

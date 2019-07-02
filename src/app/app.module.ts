import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DemoComponent } from './demo/demo.component';
import { NewComponent } from './new/new.component';
import { SuccessComponent } from './success/success.component';
// import { from } from 'rxjs';
// import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DemoComponent,
    NewComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

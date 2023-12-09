import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { GetconfirmationComponent } from './shared/component/getconfirmation/getconfirmation.component';
import { PostinceptorService } from './shared/services/postinceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PostCardComponent,
    PostFormComponent,
    GetconfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass:PostinceptorService,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

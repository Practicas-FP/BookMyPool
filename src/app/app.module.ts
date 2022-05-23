import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './components/login/login.component';
import { DevicesComponent } from './components/devices/devices.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeviceRegisterComponent } from './components/device-register/device-register.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DevicesComponent,
    NotFoundComponent,
    DeviceRegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

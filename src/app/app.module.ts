import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { VacatureModule } from './vacature/vacature.module';
import { BedrijfModule } from './bedrijf/bedrijf.module';
import { UserModule } from './user/user.module';
import { SecurityModule } from './security/security.module';
import { SollicitatieModule } from './vacature/sollicitatie/sollicitatie.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VacatureModule,
    UserModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DataStorageService  } from '../app/services/data-storage.service';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import {AuthGuard} from '../app/guards/auth.guard';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { DomSecurityPipe } from './pipes/dom-security/dom-security.pipe';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { SitiosListComponent } from './components/sitios-list/sitios-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasListComponent,
    NoticiasUpsertComponent,
    PrivateComponent,
    LoginComponent,
    AcercaDeComponent,
    ServiciosComponent,
    ContactenosComponent,
    DomSecurityPipe,
    InfoUsuarioComponent,
    SitiosListComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe,DataStorageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

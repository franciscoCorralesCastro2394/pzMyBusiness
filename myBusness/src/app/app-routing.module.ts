import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent }  from './components/acerca-de/acerca-de.component';
import { ContactenosComponent } from '../app/components/contactenos/contactenos.component';
import { ServiciosComponent } from '../app/components/servicios/servicios.component';
import { InfoUsuarioComponent } from '../app/components/info-usuario/info-usuario.component';
import { SitiosListComponent } from '../app/components/sitios-list/sitios-list.component';
import { SitioComponent } from '../app/components/sitio/sitio.component';
import { BuscarSitiosComponent } from '../app/components/buscar-sitios/buscar-sitios.component';
import { EditSitioComponent } from '../app/components/edit-sitio/edit-sitio.component';
import { SitioSeguidoComponent } from '../app/components/sitio-seguido/sitio-seguido.component'; 
import { AuthenticationGuard } from '../app/guards/authentication/authentication.guard'; 
import { AuthorizationGuard } from '../app/guards/authorization/authorization.guard'; 


const routes: Routes = [
  
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'noticias-list', component: NoticiasListComponent },
  { path: 'home', component: NoticiasListComponent },
  { path: 'login/:selector', component: LoginComponent},
  { path: 'loginIngresar/:selector', component: LoginComponent},


  { path: 'noticias-edit/:id', component: NoticiasUpsertComponent},
  { path: 'noticias-insert', component: NoticiasUpsertComponent,
    canActivate: [AuthorizationGuard], data: {role: 'Admin'}},
  { path: 'edit-sitio/:id', component: EditSitioComponent,
  canActivate: [AuthorizationGuard], data: {role: 'Editor'}},
 
 

  { path: 'user-info/:user', component: InfoUsuarioComponent,canActivate:[AuthenticationGuard]},
  { path: 'sitios-list', component: SitiosListComponent,canActivate:[AuthenticationGuard]},
  { path: 'sitio/:id', component: SitioComponent,canActivate:[AuthenticationGuard]},
  { path: 'buscar/:id', component: BuscarSitiosComponent,canActivate:[AuthenticationGuard]},
  { path: 'sitio-seguido/:id', component:SitioSeguidoComponent,canActivate:[AuthenticationGuard]},
  { path: 'sitio-insert', component:EditSitioComponent,canActivate:[AuthenticationGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



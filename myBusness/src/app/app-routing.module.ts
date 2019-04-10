import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent }  from './components/acerca-de/acerca-de.component';
import { PrivateComponent } from './components/private/private.component'
import { AuthGuard } from '../app/guards/auth.guard';
import { AuthAdminGuard } from '../app/guards/auth-admin.guard';
import { ContactenosComponent } from '../app/components/contactenos/contactenos.component';
import { ServiciosComponent } from '../app/components/servicios/servicios.component';
import { InfoUsuarioComponent } from '../app/components/info-usuario/info-usuario.component';
import { SitiosListComponent } from '../app/components/sitios-list/sitios-list.component';
import { SitioComponent } from '../app/components/sitio/sitio.component';
import { BuscarSitiosComponent } from '../app/components/buscar-sitios/buscar-sitios.component';



const routes: Routes = [
  
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'noticias-list', component: NoticiasListComponent },
  { path: 'noticias-edit/:id', component: NoticiasUpsertComponent, canActivate:[AuthAdminGuard]},
  { path: 'noticias-insert', component: NoticiasUpsertComponent, canActivate:[AuthAdminGuard] },
  { path: 'login/:selector', component: LoginComponent},
  { path: 'user-info/:user', component: InfoUsuarioComponent, canActivate:[AuthGuard], children:[
   
  ]},
  {path: 'sitios-list', component: SitiosListComponent},
  {path: 'sitio/:id', component: SitioComponent},
  {path: 'buscar/:id', component: BuscarSitiosComponent},
  { path: '**', component: NoticiasListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



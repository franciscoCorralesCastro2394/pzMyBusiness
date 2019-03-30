import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent }  from './components/acerca-de/acerca-de.component';
import { PrivateComponent } from './components/private/private.component'
import { AuthGuard } from '../app/guards/auth.guard';
import { ContactenosComponent } from '../app/components/contactenos/contactenos.component';
import { ServiciosComponent } from '../app/components/servicios/servicios.component';





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'noticias-list', component: NoticiasListComponent },
  { path: 'noticias-edit/:id', component: NoticiasUpsertComponent },
  { path: 'noticias-insert', component: NoticiasUpsertComponent },
  //{ path: 'private', component: PrivateComponent, canActivate:[AuthGuard], children:[

  //] },
  { path: '**', component: NoticiasListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



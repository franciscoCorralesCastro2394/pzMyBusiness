import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/heroes.interfaces';
import swal from 'sweetalert';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users$:Observable<any>;

  constructor( private usuariosService:UsuariosService) {

    this.getUsuario();
   }
  ngOnInit() {
  }


  getUsuario = () => {
    this.users$ = this.usuariosService.getAllUaurios();
  }

  guardarCambios(user:Usuario,rol:string){
    user.roles = rol;
    this.usuariosService.saveUsuario(user);
    swal("Exito", "Se guardaron los datos", "success");        
    this.getUsuario();
  }

}

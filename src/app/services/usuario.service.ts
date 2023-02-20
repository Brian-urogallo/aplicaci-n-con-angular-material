import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  listUsuarios: Usuario[] = [
    {usuario: "bguevara", nombre: 'Brian', apellido: 'Guevara', sexo: 'Masculino'},
    {usuario: "arqabi", nombre: 'Abigail', apellido: 'Lopez', sexo: 'Femenino'},
    {usuario: "alecaro", nombre: 'Alexandra', apellido: 'Flebes', sexo: 'Femenino'},
    {usuario: "anarcopunk", nombre: 'Omar', apellido: 'Jimenez', sexo: 'Masculino'},
    {usuario: "ingpully", nombre: 'Elizabeth', apellido: 'Lopez', sexo: 'Femenino'},
    {usuario: "chavig", nombre: 'Salvador', apellido: 'Gaipa', sexo: 'Masculino'},
   
  ]

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
    
  }
}

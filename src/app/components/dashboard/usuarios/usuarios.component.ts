import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  listUsuarios: Usuario[] = [];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  
 
  constructor(private _usuarioService: UsuarioService,private _snackBar: MatSnackBar){}

  ngOnInit(){
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event : Event){
    const filtervalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

  eliminarUsuario(index : number){
      console.log(index);

      this._usuarioService.eliminarUsuario(index);
      this.cargarUsuario();

      this._snackBar.open('El usuario ha sido eliminado con exito','',{
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
  }

}

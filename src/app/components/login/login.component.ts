import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(){

  }

  ingresar(){
   
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario == 'bguevara' && password == '123456789'){
      this.fakeLogin();
      /**redireccionar a dashboard */
    }else{
      /**emitir mensaje de error y volver al login */
    this.error();
    this.form.reset();
    }
  }

  error(){
    this._snackBar.open('El usuario o la contraseña son incorrectos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLogin(){
    this.loading = true;
    setTimeout(()=>{
      /**redireccionar al dashboard */
     this.router.navigate(['dashboard']);
    },1500)
  }
}

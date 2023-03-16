import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   myForm : FormGroup; 

  constructor(private usuarioHttpService:UsuarioHttpService, 
    private formBuilder: FormBuilder ) {
    this.myForm = this.newForm();
  }
  ngOnInit(): void {
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      userName : [null, [Validators.required]],
      password : [null, [Validators.required]],
      
    });
  }
// funcion button
  onSubmit(){
    if(this.myForm.valid){
      if(this.myForm.valid){
        this.login();
        this.myForm.reset();
        window.location.assign("http://localhost:4200/pages/menu-presidente") //bonton
      }

      
    } else{
    alert('El formulario no es valido');
  }
  }

  login(){
    this.usuarioHttpService.login(this.myForm.value).subscribe(
      response => {
        this.myForm.reset();
      }
    );
  }

  get userNameField() {
    return this.myForm.controls['userName'];
  }

  get passwordField() {
    return this.myForm.controls['password'];
  }

}

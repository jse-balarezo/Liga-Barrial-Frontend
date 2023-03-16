import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import {UsuarioHttpService} from '../../services/usuario-http.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario : UsuarioModel[] = [];
  title : string = 'Usuarios';
  myForm : FormGroup; 

  constructor(private usuarioHttpService:UsuarioHttpService, 
    private formBuilder: FormBuilder ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    this.index();
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      id : [null],
      name : [null, [Validators.required, Validators.minLength(4)]],
      password : [null, [Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  index(){
    this.usuarioHttpService.index().subscribe(
      response => {
       this.usuario = response.data;
      }
    );
    }

  show(id : number){
    this.usuarioHttpService.show(id).subscribe(
      response => {
       this.myForm.patchValue(response.data);
      }
    );
  }

  onSubmit(){
    if(this.myForm.valid){
      if(this.idField.value){
        this.update();
      }else{
        this.store();
      }
      this.myForm.reset();
    } else{
    alert('El formulario no es valido');
  }
  }

  store(){
    this.usuarioHttpService.store(this.myForm.value).subscribe(
      response => {
       this.index();
      }
    );
  }

  update(){
    this.usuarioHttpService.update(this.idField.value, this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  destroy(id : number){
    this.usuarioHttpService.destroy(id).subscribe(
      response => {
       this.index();
      }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get passwordField() {
    return this.myForm.controls['password'];
  }

}

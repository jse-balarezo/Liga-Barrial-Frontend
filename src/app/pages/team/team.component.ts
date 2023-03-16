import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TeamModel } from 'src/app/models/team.model';
import {TeamHttpService} from '../../services/team-http.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  teams : TeamModel[] = [];
  title : string = 'Equipos'
  myForm : FormGroup; 

  constructor(private teamHttpService:TeamHttpService, private formBuilder: FormBuilder) {
    this.myForm = this.newForm();
   }

  ngOnInit(): void {
    this.index();
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      id : [null],
      amount: [null,[Validators.min(100), Validators.max(10000000000)]],
      name : [null, [Validators.required, Validators.minLength(4)]],
      nickname : [null, [Validators.minLength(4), Validators.maxLength(15)]],
      ranking : [null,[Validators.min(1), Validators.max(1000)]],
      state : [false, [Validators.required]]
    });
  }

  index(){
    this.teamHttpService.index().subscribe(
      response => {
        this.teams = response.data;
      }
    );
  }

  show(id : number){
    this.teamHttpService.show(id).subscribe(
      response => {
        this.myForm.patchValue(response.data);
      }
    );
  }

  onSubmit(){
    if(this.myForm.valid){
      if(this.idField.value){
        this.update();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu registro ha sido actualizado',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        this.store();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu registro ha sido guardado',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.myForm.reset();
    } else{
    alert('El formulario no es valido');
  }
  }

  store(){
    this.teamHttpService.store(this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  update(){
    this.teamHttpService.update(this.idField.value, this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  destroy(id : number){
    this.teamHttpService.destroy(id).subscribe(
      response => {
       this.index();
      }
    );
  }
  //MODAL ELIMINAR
  






  get idField() {
    return this.myForm.controls['id'];
  }

  get amountField() {
    return this.myForm.controls['amount'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get nicknameField() {
    return this.myForm.controls['nickname'];
  }

  get rankingField() {
    return this.myForm.controls['ranking'];
  }

  get stateField() {
    return this.myForm.controls['state'];
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CoachModel } from 'src/app/models/coach.model';
import { TeamModel } from 'src/app/models/team.model';
import {CoachHttpService} from '../../services/coach-http.service';
import {TeamHttpService} from '../../services/team-http.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})

export class CoachComponent implements OnInit {
  coaches : CoachModel[] = [];
  teams : TeamModel[] = [];
  title : string = 'Entrenadores'
  myForm : FormGroup; 

  constructor(private coachHttpService:CoachHttpService,
    private teamHttpService:TeamHttpService, 
    private formBuilder: FormBuilder) { 
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    this.index();
    this.loadTeams();
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      id : [null],
      team : [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(20)]],
      name : [null, [Validators.required, Validators.minLength(4)]],
      nickname : [null, [Validators.minLength(4), Validators.maxLength(15)]],
      salary : [null, [Validators.min(10), Validators.max(10000000000)]],
      state : [false, [Validators.required]]
    });
  }

  loadTeams(){
    this.teamHttpService.index().subscribe(
      response=>{
        this.teams = response.data;
      }
    )
  }

  index(){
    this.coachHttpService.index().subscribe(
      response => {
        this.coaches = response.data;
      }
    );
  }

  show(id : number){
    this.coachHttpService.show(id).subscribe(
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
    this.coachHttpService.store(this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  update(){
    this.coachHttpService.update(this.idField.value, this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  destroy(id : number){
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
    this.coachHttpService.destroy(id).subscribe(
      response => {
       this.index();
      }
    );
    Swal.fire(
          '¡Eliminado!',
          'Su registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get teamField() {
    return this.myForm.controls['team'];
  }

  get ageField() {
    return this.myForm.controls['age'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get nicknameField() {
    return this.myForm.controls['nickname'];
  }
  
  get salaryField() {
    return this.myForm.controls['salary'];
  }

  get stateField() {
    return this.myForm.controls['state'];
  }
}

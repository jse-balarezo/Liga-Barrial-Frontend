import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CoachModel } from 'src/app/models/coach.model';
import { AssistantCoachModel } from 'src/app/models/assistantCoach.model';
import { AssistantCoachHttpService} from '../../services/assistant-coach-http.service';
import {CoachHttpService} from '../../services/coach-http.service';

@Component({
  selector: 'app-assistant-coach',
  templateUrl: './assistant-coach.component.html',
  styleUrls: ['./assistant-coach.component.css']
})

export class AssistantCoachComponent implements OnInit {
  assistantCoaches : AssistantCoachModel[] = [];
  coaches : CoachModel[] = [];
  title : string = 'Asistentes del Entrenador'
  myForm : FormGroup; 

  constructor(private assistantCoachHttpService:AssistantCoachHttpService, 
    private coachHttpService:CoachHttpService,
    private formBuilder: FormBuilder) { 
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    this.index();
    this.loadCoaches();
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      id : [null],
      coach : [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(20)]],
      name : [null, [Validators.required, Validators.minLength(4)]],
      nickname : [null, [Validators.minLength(4), Validators.maxLength(15)]],
      salary : [null, [Validators.min(10), Validators.max(10000000000)]],
      state : [false, [Validators.required]]
    });
  }

  loadCoaches(){
    this.coachHttpService.index().subscribe(
      response=>{
        this.coaches = response.data;
      }
    )
  }

  index(){
    this.assistantCoachHttpService.index().subscribe(
      response => {
        this.assistantCoaches = response.data;
      }
    );
  }

  show(id : number){
    this.assistantCoachHttpService.show(id).subscribe(
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
    this.assistantCoachHttpService.store(this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  update(){
    this.assistantCoachHttpService.update(this.idField.value, this.myForm.value).subscribe(
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
    this.assistantCoachHttpService.destroy(id).subscribe(
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

  get coachField() {
    return this.myForm.controls['coach'];
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

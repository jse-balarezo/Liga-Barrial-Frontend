import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FootballGameModel } from 'src/app/models/footballGame.model';
import {FootballGameHttpService} from '../../services/football-game-http.service';

@Component({
  selector: 'app-football-game',
  templateUrl: './football-game.component.html',
  styleUrls: ['./football-game.component.css']
})

export class FootballGameComponent implements OnInit {
  footballGames : FootballGameModel[] = [];
  title : string = 'Partidos';
  myForm : FormGroup;

  constructor(private footballGameHttpService :FootballGameHttpService, private formBuilder: FormBuilder  ) { 
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    this.index();
  }

  newForm() : FormGroup{
    return this.formBuilder.group({
      id : [null],
      date: [null, [Validators.required]],
      loser : [null, [Validators.required, Validators.maxLength(15)]],
      numberMatches: [null, [Validators.required, Validators.min(2)]],
      penalties : [false, [Validators.required]],
      winner : [null,[Validators.minLength(4), Validators.maxLength(15)]],
      tied : [false, [Validators.required]]
    });
  }

  index(){
    this.footballGameHttpService.index().subscribe(
      response => {
        this.footballGames = response.data;
      }
    );
  }

  show(id : number){
    this.footballGameHttpService.show(id).subscribe(
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
    this.footballGameHttpService.store(this.myForm.value).subscribe(
      response => {
        this.index();
      }
    );
  }

  update(){
    this.footballGameHttpService.update(this.idField.value, this.myForm.value).subscribe(
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
    this.footballGameHttpService.destroy(id).subscribe(
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

  get dateField() {
    return this.myForm.controls['date'];
  }

  get loserField() {
    return this.myForm.controls['loser'];
  }

  get numberMatchesField() {
    return this.myForm.controls['numberMatches'];
  }
  
  get penaltiesField() {
    return this.myForm.controls['penalties'];
  }

  get winnerField() {
    return this.myForm.controls['winner'];
  }

  get tiedField() {
    return this.myForm.controls['tied'];
  }
}

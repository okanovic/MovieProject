import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from 'src/app/Models';

@Component({
  selector: 'create-other-movie-detail',
  templateUrl: './create-other-movie-detail.component.html',
  styles: [`
  em {float:right; color:#E05C65}
  .error  {border:2px solid #E05C65}
  `]
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewMovieOtherDetail = new EventEmitter()
  @Output() cancelMovieOtherDetail = new EventEmitter()
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })


  }
  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      votes:formValues.votes
    }
    this.saveNewMovieOtherDetail.emit(session)
  }
  cancel(){
    this.cancelMovieOtherDetail.emit()
  }
  restrictedWords(control: FormControl): { [key: string]: any } {
    return control.value.includes('test') ? { 'restrictedWords': 'test' } : null
  }
}

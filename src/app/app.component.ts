import { AfterViewInit, Component, ViewChild, Output, ChangeDetectorRef, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form?: any
  
  constructor(public formBuilder: FormBuilder) {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      email: new FormControl('', [
        Validators.email
      ]),
      address: new FormControl(),
      skills: new FormArray([])
    })

    this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }
  
  addSkill(skill: HTMLInputElement) {
    this.skills.push(
      new FormControl(skill.value)
    ) 
  }

  onSubmit() {
    console.log(this.form.value)
  }

  get fullName() {
    return this.form?.get("fullName")
  }

  get email() {
    return this.form?.get("email")
  }

  get skills() {
    return this.form.get("skills")
  }
}

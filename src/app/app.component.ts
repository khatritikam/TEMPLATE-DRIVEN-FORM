import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularforms';
  defaultCountry='india';
  firstName:string;
  lastName:string;
  email:string;
  gen:string;
  country:string;

  defaulatGender= 'Male'

  gender=[
    {id:'1', value:'Male'},
    {id:'2', value:'Female'},
    {id:'3', value:'Other'}
  ]

  @ViewChild('myForm')  form:NgForm

  onSubmit(){
    console.log(this.form)

    this.firstName = this.form.value.personDetails.firstname;
    this.lastName = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset()
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstName = 'John'
    // this.form.value.personDetails.lastName = 'Smith'
    // this.form.value.personDetails.email = 'abc@example.com'
    // this.form.setValue({
    //   country:'',
    //   gender: '',
    //   hobbies:'',
    //   personDetails:{
    //     firstname:'John',
    //     lastname:'Smith',
    //     email:'abc@example.com'
    //   }

    // })
    this.form.form.patchValue({
      personDetails:{
        firstname:'John',
        lastname:'Smith',
        email:'abc@example.com'
      }
    })
  }
}

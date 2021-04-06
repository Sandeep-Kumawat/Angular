import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupName, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './user';

function ageRangeValidator( min: number, max: number ): ValidatorFn{        //when we are taking input from user or Api
 return (control:AbstractControl):{[key:string]:boolean}|null=>
 {
    if(control.value !== undefined && (isNaN(control.value) || control.value<min ||control.value>max))
    {
      return {'ageRange':true};
    }
    return null;
 };
}
// function ageRangeValidator(control:AbstractControl):{[key:string]:boolean}| null{                       //hard Code when we pass set value
//   if(control.value !== undefined && (isNaN(control.value) || control.value<18 ||control.value>50))
//     {
//       return {'ageRange':true};
//     }
//     return null;
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  min:number=25;
  max:number=50;
  loginForm:FormGroup;
  user:IUser={
    email:"sandeep.kumawat@taazaa.com",
    password:"asddff"
  }
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(this.user.email,[Validators.required]),
      password: new FormControl(this.user.password,[Validators.required,Validators.minLength(5)]),
      age:new FormControl(null,ageRangeValidator(this.min,this.max)),
      phonenumber: new FormControl(null,[]),
      notification: new FormControl('email',[])

    });
    this.formControlValueChanged();
  }
  login()
  {
    console.log(this.loginForm.value);
    console.log(this.user)
  }
  cancel(){
    this.loginForm.reset();
  }
  formControlValueChanged(){
    const phoneControl = this.loginForm?.get('phonenumber');
    this.loginForm.get('notification')?.valueChanges.subscribe((data:string)=>{
      console.log(data);
      if(data==='phone')
      {
        phoneControl?.setValidators([Validators.required])
      }
      else if(data==='email'){
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    })
  }

}

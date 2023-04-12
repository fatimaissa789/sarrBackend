import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Swal from 'sweetalert2';
//import { MustMatch } from '../../MustMatch';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editpass',
  templateUrl: './editpass.component.html',
  styleUrls: ['./editpass.component.css']
})
export class EditpassComponent implements OnInit {

 
  //*output tranfert donné enfant vers parent///
  @Output() closed = new EventEmitter();
  @Input()
  isOpen =  false;
  user: any;


  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  form!: FormGroup ;
submitted = false;
Users: any = [];
  errMsg: any;
  formGroup: any;
  updateForm: any;
  pass!: string;

  constructor(
    private formBuilder: FormBuilder,)
    {
      this.updateForm = this.formBuilder.group({
        ancienpassword:['',[Validators.required,Validators.minLength(8)]],
        newpassword:['',[Validators.required,Validators.minLength(8)]],
        passwordConfirm: ['', Validators.required],
    }/* ,  { validator: MustMatch('password', 'passwordConfirm')} */);

  }
  ngOnInit(): void {
   /*  this.authService.GetUsers().subscribe(
      data => {
        this.user = data;
        this.Users = this.user.filter((e: any) => e.etat == true)
        console.log(this.Users)
      }
    ); */
  }

  updatepass(){
   /*  let id = localStorage.getItem('id')?.replaceAll('"', ''); */
    const id =  this.updateForm.value.id;
      const user ={

    newpassword: this.updateForm.value.newpassword,
    ancienpassword: this.updateForm.value.ancienpassword,
    passwordConfirm: this.updateForm.value.passwordConfirm

   }
   this.submitted = true;
   if(this.updateForm.invalid){
    console.log(this.updateForm.errors);
     return;
   }
   // retourne a la page deconnection apres le popup modification reussi
   //return this.authService.updatepass(localStorage.getItem('id'),user).subscribe((data)=>{


    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Modification  mot de passe réussi !',
      showConfirmButton: false,
      timer: 1500
    });
   //this.authService.doLogout()
   }
   
}

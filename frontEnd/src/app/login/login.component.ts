//import { IotService } from './../service/iot.service';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
////import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any
  registerForm!: FormGroup
  donne: any = {}

  submitted = false
  loginError: string | null=null
  /* on a injecter formbuilder de type formbuilder */

  /* on a injecter formbuilder de type formbuilder */
  constructor(private formBuilder: FormBuilder, private router: Router ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })



  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true

    if (this.registerForm.invalid) {
      return
    }
  
    /* this.authService.login(this.registerForm.value).subscribe({

      next: (response: { access_token: string; email: string; }) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('email', response.email);
        this.router.navigateByUrl('/dashboard');
      },
      error: (err: { error: { message: string | null; }; }) => {
        this.loginError = err.error.message
        setTimeout(() => {
          this.loginError = null;
        }, 5000)
      },
      complete: () => console.log('complete')
    }) 
  }
*/}
  }

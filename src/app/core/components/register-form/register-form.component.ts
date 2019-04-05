import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private service: AuthService,
              private fb: FormBuilder,
              public dialog: MatDialog) { }

   registerForm = this.fb.group({
      name: [''],
      password: [''],
      email: ['']
   });

   register() {
      this.service.register(this.registerForm.value).subscribe( res => {
         this.service.isAuthorized = true;
         this.service.user = res;
         this.dialog.closeAll();
      });
      this.registerForm.reset();
   }



}

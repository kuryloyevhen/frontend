import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor( private service: AuthService,
               private fb: FormBuilder,
               public dialog: MatDialog,
               private socket: SocketService) { }

   loginForm = this.fb.group({
     name: [''],
     password: ['']
  });


  login() {
     this.service.login(this.loginForm.value).subscribe(
        res => {
           this.service.isAuthorized = true;
           this.service.user = res;
           this.socket.connectToSocket();
           this.dialog.closeAll();
        }
     );
     this.loginForm.reset();
  }



}

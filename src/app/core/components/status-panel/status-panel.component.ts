import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { GameListComponent } from '../game-list/game-list.component';
import { AuthService } from '../../../shared/services/auth.service';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { SocketService } from 'src/app/shared/services/socket.service';
import { Router } from '@angular/router';
import { GameCreatorService } from 'src/app/shared/services/game-creator.service';


@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent {

  constructor(public dialog: MatDialog,
              public service: AuthService,
              private gameCreator: GameCreatorService,
              private socket: SocketService,
              private router: Router) { }

   user: object;
   isAuthorized = false;
   isPlaying = false;

  openLoginDialog() {
      let dialogConfig = new MatDialogConfig();
      dialogConfig = {
         disableClose: true,
         autoFocus: true,
         width: '250px',
         height: '200px'
      };
      const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe( () => {
         this.isAuthorized = this.service.isAuthorized;
         this.user = this.service.user;
         this.socket.connectToSocket();
      });
  }

  openGameList() {
   let dialogConfig = new MatDialogConfig();
   dialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '400px',
      height: '400px'
   };
   const dialogRef = this.dialog.open(GameListComponent, dialogConfig);
   dialogRef.afterClosed().subscribe( () => {
      this.isPlaying = this.gameCreator.isPlaying;
   });
}

openRegisterForm() {
   let dialogConfig = new MatDialogConfig();
   dialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '300px',
      height: '300px'
   };
   const dialogRef = this.dialog.open(RegisterFormComponent, dialogConfig);
   dialogRef.afterClosed().subscribe( () => {
      this.isAuthorized = this.service.isAuthorized;
      this.user = this.service.user;
      this.socket.connectToSocket();
   });
}

logout() {
   this.service.logout().subscribe( () => {
      this.isAuthorized = false;
      this.user = {};
   });
   this.socket.stoneage.disconnect();
   this.router.navigate(['home']);
}




}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { GameCreatorService } from '../../../shared/services/game-creator.service';
import { SocketService } from '../../../shared/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private service: GameCreatorService,
              private socket: SocketService,
              private router: Router) { }

   games: Array<any>;

   rooms: object[] = [];
   roomForm = this.fb.group({
      name: ['']
   });

  ngOnInit() {
     this.service.getRooms().subscribe( res => {
        this.rooms = res;
     });
  }

  createGame() {
      this.service.createRoom(this.roomForm.value).subscribe( res => {
         this.socket.room = res.name;
         this.socket.connectToRoom(this.roomForm.value.name).subscribe();
         this.dialog.closeAll();
         this.router.navigate(['stoneage']);
      });
  }

  joinToGame(name) {
      this.socket.connectToRoom(name).subscribe();
      this.router.navigate(['stoneage']);
      this.dialog.closeAll();
      this.socket.room = name;
  }


}

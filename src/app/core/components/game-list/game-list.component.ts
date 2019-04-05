import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { GameCreatorService } from '../../../shared/services/game-creator.service';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private service: GameCreatorService,
              private socket: SocketService) { }

   games: Array<any>;

   rooms: object[] = [];
   roomForm = this.fb.group({
      id: [ 1 ],
      name: ['']
   });

  ngOnInit() {
     this.service.getRooms().subscribe( res => {
        this.rooms = res;
     });
  }

  intoGame() {
     this.dialog.closeAll();
  }

  createGame() {
      this.service.createRoom(this.roomForm.value).subscribe( res => {
         this.rooms = res;
      });
      this.socket.connectToRoom(this.roomForm.value.name).subscribe();
      this.dialog.closeAll();
  }

  joinToGame(name) {
      this.socket.connectToRoom(name).subscribe();
      this.dialog.closeAll();
  }


}

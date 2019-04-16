import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-stoneage',
  templateUrl: './stoneage.component.html',
  styleUrls: ['./stoneage.component.css']
})
export class StoneageComponent implements OnInit {

  constructor(private socket: SocketService) { }

  id;
  blockLayer;

  ngOnInit() {
   this.blockLayer = document.getElementsByClassName('blocking-layer')[0];

	this.socket.movementError().subscribe( error => {
		window.alert(error);
   });

   this.socket.getID().subscribe( id => {
      this.id = id;
   });

   this.socket.changePlayer().subscribe( id => {
      if (id !== this.id) {
         this.blockLayer.classList.add('block');
      } else if (id === this.id) {
         this.blockLayer.classList.remove('block');
      }
   });

  }

}

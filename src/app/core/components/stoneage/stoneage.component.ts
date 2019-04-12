import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-stoneage',
  templateUrl: './stoneage.component.html',
  styleUrls: ['./stoneage.component.css']
})
export class StoneageComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit() {
	  this.socket.movementError().subscribe( error => {
		  window.alert(error);
     });

  }

}

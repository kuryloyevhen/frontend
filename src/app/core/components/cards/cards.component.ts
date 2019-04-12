import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit() {
   this.socket.phase().subscribe( res => {
      const elem = document.getElementsByClassName('cards')[0];
      if (res !== 'movement') {
         elem.classList.remove('phase');
      } else {
         elem.classList.add('phase');
      }
   });
  }

}

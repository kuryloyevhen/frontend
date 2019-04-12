import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-agronomy',
  templateUrl: './agronomy.component.html',
  styleUrls: ['./agronomy.component.css']
})
export class AgronomyComponent implements OnInit {

  constructor(private socket: SocketService) { }

  root;
  elem;

  ngOnInit() {

     this.root = document.getElementsByClassName('agronomy');
     this.elem = this.root[0].getElementsByClassName('human-place')[0];
     this.elem.addEventListener('click', eventObject => {
        const data = {
           staff: 'agronomy',
           amount: 1
        };
        this.socket.move(data);
     });
  }

}

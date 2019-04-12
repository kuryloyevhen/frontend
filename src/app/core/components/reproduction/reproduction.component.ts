import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-reproduction',
  templateUrl: './reproduction.component.html',
  styleUrls: ['./reproduction.component.css']
})
export class ReproductionComponent implements OnInit {

  constructor(private socket: SocketService) { }

   root;
   elem;

  ngOnInit() {
     this.root = document.getElementsByClassName('reproduction')[0];
     this.elem = this.root.getElementsByClassName('human-place');
     for (let item of this.elem) {
        item.addEventListener('click', () => {
           const data = {
              staff: 'reproduction',
              amount: 2
           };
           this.socket.move(data);
        });
     }
  }

}

import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-smithy',
  templateUrl: './smithy.component.html',
  styleUrls: ['./smithy.component.css']
})
export class SmithyComponent implements OnInit {

  constructor(private socket: SocketService) { }

  smithy;
  humanPlace;

  ngOnInit() {
     this.smithy = document.getElementsByClassName('smithy');
     this.humanPlace = this.smithy[0].getElementsByClassName('human-place')[0];
     this.humanPlace.addEventListener('click', () => {
      const data = {
         staff: 'smithy',
         amount: 1
      };
      this.socket.move(data);
     });
  }

}

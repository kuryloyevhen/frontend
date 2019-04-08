import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: SocketService) { }

   message: string;
   messages: string[] = [];

   sendMessage() {
      this.socket.sendMessage(this.message);
      this.message = '';
   }

   ngOnInit() {
      this.socket.getMessages().subscribe( (message: string) => {
         this.messages.push(message);
      });
   }


}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()

export class SocketService {
   private url = 'http://127.0.0.1:3000';
   public stoneage;

   constructor() {}

   connectToSocket() {
      this.stoneage = io.connect(`${this.url}/stoneage`);
   }

   sendMessage(message) {
      this.stoneage.emit('message', message);
   }

   getMessages() {
      return Observable.create( (observer) =>
         this.stoneage.on('message', (message) =>
            observer.next(message)
         )
      );
   }

   connectToRoom(name) {
      return Observable.create( observer => {
         this.stoneage.emit('join', name);
      });
   }

   getRoomList() {
      return Observable.create( (observer) =>
         this.stoneage.on('join', (message) =>
            observer.next(message)
         )
      );
   }


}


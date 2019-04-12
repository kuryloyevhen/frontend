
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()

export class SocketService {
   private url = 'http://127.0.0.1:3000';
   public stoneage;
   room = '';

   constructor() {}

   connectToSocket() {
      this.stoneage = io.connect(`${this.url}/stoneage`);
   }

   sendMessage(message) {
      const body = {
         room: this.room,
         message
      };
      this.stoneage.emit('message', body);
   }

   /* sendChanges(data) {
      this.stoneage.emit('changes', data);
   }*/

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

   changes() {
      return Observable.create( observer => {
         this.stoneage.on('changes', data => {
            observer.next(data);
         });
      });
   }

   move(data) {
      data.room = this.room;
      this.stoneage.emit('movement', data);
   }

   getMovement() {
      return Observable.create( observer => {
         this.stoneage.on('movement', data =>
            observer.next(data)
         );
      });
   }

   movementError() {
      return Observable.create( observer => {
         this.stoneage.on('movementError', error =>
            observer.next(error)
         );
      });
   }

   returnPeople(data) {
      this.stoneage.emit('return', data);
   }

   getReturn() {
      return Observable.create( observer => {
         this.stoneage.on( 'return', data => {
            observer.next(data);
         });
      });
   }

   feed() {
      this.stoneage.emit('feed');
   }

   phase() {
      return Observable.create( observer => {
         this.stoneage.on('changePhase', data => {
            observer.next(data);
         });
      });
   }

   changePhase(data) {
      this.stoneage.emit('changePhase', data);
   }




}


import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {

  constructor(private storage: StorageService,
              private socket: SocketService) { }

   playerId;

   player = {
      wood: 0,
      clay: 0,
      stone: 0,
      gold: 0,
      agronomy: 0,
      smithy: 0,
      dwellings: {},
      civilizationCards: {},
      points: 0,
      population: 0,
      food: 0
   };

   isDisabled = {
      wood: true,
      clay: true,
      stone: true,
      gold: true,
      population: true,
      food: true,
      agronomy: true,
      smithy: true
   };

   isEnd = () => Object.values(this.isDisabled).every( value =>
      value === true
   )


   ngOnInit() {
      this.socket.changes().subscribe( res => {
         for (const prop in res) {
            if (res.hasOwnProperty(prop) && res.propertyIsEnumerable(prop)) {
               this.player[prop] = res[prop];
            }
         }
         this.playerId = res.id;
      });

      this.socket.getMovement().subscribe( res => {
         if (res.id === this.playerId) {
            let elem;
            elem = document.getElementsByClassName('btn');
            for (let prop in res) {
               if (res.hasOwnProperty(prop) && res.propertyIsEnumerable(prop) && prop !== 'id') {
                  if (res[prop] !== 0) {
                     this.isDisabled[prop] = false;
                     for (let item of elem) {
                        if (item.dataset.name === prop) {
                           item.classList.add('btn-outline-primary');
                           item.classList.remove('btn-outline-light');
                        }
                     }
                  } else {
                     for (let item of elem) {
                        if (item.dataset.name === prop) {
                           item.classList.add('btn-outline-light');
                           item.classList.remove('btn-outline-primary');
                        }
                     }
                  }
               }
            }
         }
      });

      this.socket.phase().subscribe( res => {
         const elem = document.getElementsByClassName('user-statistic')[0];
         if (res !== 'return') {
            elem.classList.remove('phase');
         } else {
            elem.classList.add('phase');
         }
      });
   }

   rollTheDice(amount) {
      const min = 1;
      const max = 6;
      let random = 0;
      for (let i = 1; i <= amount; i++) {
         random += Math.round(Math.random() * (max - min) + min);
      }
      return random;
   }

   countResource(name, divider) {
      if (name === 'agronomy' || name === 'smithy') {
         console.log('work');
         this.isDisabled[name] = true;
         let data = {
            people: 1,
            resourceName: name,
            resourceAmount: 1
         };
         this.socket.returnPeople(data);
      } else if (name === 'population') {
         this.isDisabled[name] = true;
         let data = {
            people: 2,
            resourceName: name,
            resourceAmount: 1
         }
         this.socket.returnPeople(data);
      } else {
         const dice = this.rollTheDice(this.storage[name]);
         const result = Math.floor(dice / divider);
         this.isDisabled[name] = true;
         const data = {
            people: this.storage[name],
            resourceName: name,
            resourceAmount: result
         };
         this.socket.returnPeople(data);
      }
      let elem;
      elem = document.getElementsByClassName('btn');
      for (let item of elem) {
         if (item.dataset.name === name) {
            item.classList.remove('btn-outline-primary');
            item.classList.add('btn-outline-light');
         }
      }
   }

   sendChanges() {
      if (this.isEnd()) {
         this.socket.feed();
         this.socket.changePhase('end');
      }
   }


}

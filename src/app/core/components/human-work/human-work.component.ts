import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-human-work',
  templateUrl: './human-work.component.html',
  styleUrls: ['./human-work.component.css']
})
export class HumanWorkComponent implements OnInit {

  constructor(private socket: SocketService,
              private storage: StorageService) { }

   resources;
   staff;
   staffPlace;
   humanPlaces = [];

  ngOnInit() {

   this.resources = document.getElementsByClassName('resource');
   for (const resource of this.resources) {
      this.humanPlaces.push(resource.getElementsByClassName('human-place'));
   }

   this.socket.getMovement().subscribe( data => {
      for (const prop in data) {
         if (data.hasOwnProperty(prop) && data.propertyIsEnumerable(prop) && prop !== 'id') {
            if (data[prop] !== 0) {
               if (prop === 'wood' || prop === 'clay' || prop === 'stone' || prop === 'gold') {
                  this.storage[prop] = data[prop];
                  const item = prop;
                  const placeIndex = data[prop];
                  let elemIndex;
                  for (const places of this.resources) {
                     if (places.dataset.name === item) {
                        elemIndex = places.dataset.id;
                     }
                  }
                  for (let i = placeIndex - 1; i >= 0; i--) {
                     this.humanPlaces[elemIndex][i].classList.add('checked');
                  }
               } else {
                  this.storage[prop] = data[prop];
                  this.staff = document.getElementsByClassName(prop)[0];
                  this.staffPlace = this.staff.getElementsByClassName('human-place');
                  for (const place of this.staffPlace) {
                     place.classList.add('checked');
                  }
               }
            }
         }
      }
   });

   this.socket.getReturn().subscribe( data => {
      let resourceIndex;
      for (const elem of this.resources) {
         if (elem.dataset.name === data.resourceName) {
            resourceIndex = elem.dataset.id;
         }
      }
      for (const item of this.humanPlaces[resourceIndex]) {
         item.classList.remove('checked');
      }
   });

   this.socket.phase().subscribe( res => {
      const elem = document.getElementsByClassName('human-work')[0];
      if (res !== 'movement') {
         elem.classList.remove('phase');
      } else {
         elem.classList.add('phase');
      }
   });

  }

}

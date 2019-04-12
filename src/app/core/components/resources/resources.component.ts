import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(private socket: SocketService) { }

  resourceTitles: any;
  resourceKinds: Array<string> = ['Wood', 'Clay', 'Stone', 'Gold'];
  resources;
  humanPlaces = [];
  data = {};

  ngOnInit() {

   this.resources = document.getElementsByClassName('resource');
   for (let i = 0; i < this.resources.length; i++) {
      this.resources[i].dataset.name = this.resourceKinds[i].toLowerCase();
      this.resources[i].dataset.id = i;
   }

   this.resourceTitles = document.getElementsByClassName('resource-kind');
   for (let i = 0; i < this.resourceTitles.length; i++) {
      this.resourceTitles[i].textContent = this.resourceKinds[i];
   }

   for (const resource of this.resources) {
      this.humanPlaces.push(resource.getElementsByClassName('human-place'));
   }

   for (const item of this.humanPlaces) {
      for (let i = 0; i < item.length; i++) {
         item[i].dataset.id = i;
      }
   }

   for (const humanPlace of this.humanPlaces) {
      for (const item of humanPlace) {
         item.addEventListener('click', eventObject => {
            const indexPlace = eventObject.target.dataset.id;
            const nameResource = eventObject.target.parentElement.parentElement.dataset.name;
            const resourceId = eventObject.target.parentElement.parentElement.dataset.id;
            let amount = 0;
            for (let i = indexPlace; i >= 0; i--) {
               if (!this.humanPlaces[resourceId][i].classList.contains('checked')) {
                  amount++;
               }
            }
            const data = {
               resource: nameResource.toLowerCase(),
               amount
            };
            this.socket.move(data);
         });
      }
   }
  }


}

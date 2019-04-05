import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  resources: any;
  resourceKinds: Array<string> = ['Wood', 'Clay', 'Stone', 'Gold'];

  ngOnInit() {
   this.resources = document.getElementsByClassName('resource-kind');
   this.resources[0].textContent = this.resourceKinds[0];
   this.resources[1].textContent = this.resourceKinds[1];
   this.resources[2].textContent = this.resourceKinds[2];
   this.resources[3].textContent = this.resourceKinds[3];
  }


}

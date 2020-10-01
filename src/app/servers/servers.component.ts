import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewAddServer = false;
  constructor() { 

    setTimeout(() => {
      this.allowNewAddServer = !(this.allowNewAddServer);
    }, 2000);
  }

  ngOnInit(): void {
  }

}

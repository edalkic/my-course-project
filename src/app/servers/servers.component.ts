import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewAddServer = false;
  serverCreationStatus = 'No server created.';
  serverName = 'Test server name';
  constructor() { 

    setTimeout(() => {
      this.allowNewAddServer = !(this.allowNewAddServer);
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer () : void {
    this.serverCreationStatus = 'Server was created. Server name is ' + this.serverName;
  }

  onUpdateServerName (event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

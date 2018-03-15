import { Component, OnInit } from '@angular/core';
import {Edl} from '../edl';
import {Edls} from  '../mock-edls'
@Component({
  selector: 'app-edls',
  templateUrl: './edls.component.html',
  styleUrls: ['./edls.component.css']
})
export class EdlsComponent implements OnInit {
  selectedEdl:Edl;
  edls = Edls;
  // edl:Edl = {
  //   eventId: 1,
  //   eventType: 'test',
  //   begin: 0,
  //   end: 100,
  //   tags: ['a', 'b', 'c']
  // };
  constructor() {
  }

  ngOnInit() {
  }
  onSelect(edl:Edl){
    this.selectedEdl = edl;
  }
}

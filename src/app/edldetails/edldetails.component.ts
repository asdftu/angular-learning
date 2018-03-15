import { Component, OnInit, Input } from '@angular/core';
import { Edl } from '../Edl';

@Component({
  selector: 'app-edldetails',
  templateUrl: './edldetails.component.html',
  styleUrls: ['./edldetails.component.css']
})
export class EdldetailsComponent implements OnInit {
  @Input() edl:Edl;
  constructor() { }

  ngOnInit() {
  }

}

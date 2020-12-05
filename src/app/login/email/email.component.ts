import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Output() emailChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
onEmailChange(value) {
  this.emailChange.emit(value);
}
}

import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Input() password: string;
  @Output() passwordChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onPasswordChange(value) {
    this.passwordChange.emit(value);
  }
}

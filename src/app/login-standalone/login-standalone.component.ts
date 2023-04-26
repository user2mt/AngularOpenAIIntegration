import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-standalone.component.html',
  styleUrls: ['./login-standalone.component.less']
})
export class LoginStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  $$circles = signal([
    { x: -40, y: -30 },
    { x: -45, y: -15 },
    { x: 1, y: -65 },
    { x: 45, y: 20 },
    { x: -5, y: 30 },
    { x: 45, y: -30 },
    { x: 39, y: -75 },
    { x: 1, y: 70 },
    { x: 50, y: 70 },
    { x: 80, y: 10 }
  ])
}

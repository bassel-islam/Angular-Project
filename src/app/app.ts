import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/app-home/home.component";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Project');
  userName:string='Bassel';
  userEmail:string='bassel.dev.com';
  userPhone:number=12345;
  userStatus:boolean=false;
  status:string='active';
}

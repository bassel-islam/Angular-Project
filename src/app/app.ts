import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/app-home/home.component";
import { About } from "./about/about";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About,FormsModule,CommonModule],
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
  flag:boolean=false;
  searchInput:string='';

  log():void{
    console.log("hello!!");
  }
  showAlert(e:Event):void{
    console.log(e);
  }
}

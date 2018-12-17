import { Component } from '@angular/core';
import { GamesService } from './games.service';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'uas';
  games=[];
  constructor(public gs:GamesService){}
  test(){
    this.gs.test().subscribe(
      (data)=>{
        this.title=data;
      }
    );
  }
  getGames(){
    this.gs.getGames().subscribe(
      (data)=>{
        this.games=data;
        console.log(data);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { IGames } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  s:string="";
  games:IGames[]=[];
  constructor(private gs:GamesService) { }
  ngOnInit() {
    this.gs.getGames(this.s).subscribe(
      (data)=>{
        this.games=data;
        console.log(data);
      }
    );
  }
  search(){
    this.gs.getGames(this.s).subscribe(
      (data)=>{
        this.games=data;
        console.log(data);
      }
    );
  }
}

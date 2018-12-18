import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { GamesService } from '../games.service';
import { IGames } from '../games';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:string='';
  game:IGames[]=[];
  likes:string='';
  constructor(private router:Router, public route:ActivatedRoute, private sanitizer: DomSanitizer, private gs:GamesService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.gs.getGamesDetail(this.id).subscribe(
      (data)=>{
        this.game=data;
        console.log(data);
      }
    );
  }
  video(id:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
  }
  like(id:string,l:string){
    if(l == "1"){this.likes= '0' }else{this.likes='1'};
    this.gs.like(id,this.likes).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/']);
      }
    );
  }
  wishlist(id:string,l:string){
    if(l == '1'){this.likes='0' }else{this.likes='1'};
    this.gs.wishlist(id,this.likes).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/wishlist']);
      }
    );
  }
}

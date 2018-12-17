import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { IGames } from '../games';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  id:string = '';
  dones:string = '';
  games:IGames[] = [];
  constructor(private router:Router, public route:ActivatedRoute, private gs:GamesService) { }
  ngOnInit() {
    console.log(this.dones);
    this.id = this.route.snapshot.params['id'];
    this.gs.getWishlist().subscribe(
      (data)=>{
        this.games=data;
        console.log(data);
      }
    );
  }
  done(id:string, d:string){
    if(d == "1"){this.dones = '0' }else{this.dones = '1'};
    this.gs.done(id,this.dones).subscribe(
      (data)=>{
        console.log(this.dones);
        this.router.navigate(['/']);
      }
    );
  }

}

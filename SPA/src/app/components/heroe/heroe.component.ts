import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  imgMarvelDc:string = "";

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {
      this.activatedRoute.params.subscribe(params => {
        console.log(params['id']);
        this.heroe = _heroesService.getHeroe(params['id']);
        console.log(this.heroe);

        if(this.heroe.casa == "DC"){
          this.imgMarvelDc = "assets/img/DC.png"
        } else if (this.heroe.casa == "Marvel"){
          this.imgMarvelDc = "assets/img/marvel.jpg"
        }
      })
   }

  ngOnInit() {
  }

}

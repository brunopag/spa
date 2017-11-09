import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {

  heroes:any[] = [];
  termino:string = "";

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = _heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
   })
 }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
// propriete doit etre liee a la propriete enfant
selectedHero?: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
onSelect(hero:Hero):void{
  
  this.selectedHero = hero ;
  console.log(this.selectedHero);
  // appel de detail
}
}

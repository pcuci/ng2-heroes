import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input()
  hero: Hero;
  sub: any;
  constructor(private heroService: HeroService, private route: ActivatedRoute) {
  }
  ngOnInit(): any {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }
  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }
  goBack() {
    window.history.back();
  }
}

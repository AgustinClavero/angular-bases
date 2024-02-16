import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }


  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }
  changeName(): void {
    this.name = 'spiderman';
  }
  changeAge(): void {
    this.age = 18;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}



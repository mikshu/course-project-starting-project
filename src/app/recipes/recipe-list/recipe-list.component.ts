import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test recipe',
      'https://www.brit.co/media-library/pressure-cooker-recipes-for-beginners.jpg?id=50633322&width=600&height=600&quality=90&coordinates=0%2C356%2C0%2C39'
    ),
    new Recipe(
      'Cheese chilly',
      'this is a cheese chilly recipe',
      'https://www.brit.co/media-library/pressure-cooker-recipes-for-beginners.jpg?id=50633322&width=600&height=600&quality=90&coordinates=0%2C356%2C0%2C39'
    ),
    new Recipe(
      'Matar mashroom',
      'this is a test recipe',
      'https://www.brit.co/media-library/pressure-cooker-recipes-for-beginners.jpg?id=50633322&width=600&height=600&quality=90&coordinates=0%2C356%2C0%2C39'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

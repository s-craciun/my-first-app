import { Component, EventEmitter, Output } from '@angular/core';
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
      'Test desc',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*'
    ),
    new Recipe(
      'A test recipe 2',
      'Test desc 2',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

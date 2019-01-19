import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Fish Recipe", "A recipe to cook fish", "http://upload4.95171.cn/albumpicimages/20101127/201011272000523172.JPG"),
    new Recipe("Duck Recipe", "A recipe to cook duck", "http://img30.360buyimg.com/jgsq-productsoa/jfs/t1057/200/126406415/192962/bcdd32a/5501286eN0b0f34f1.jpg")
  ];
  @Output() recipeListItemSeleted = new EventEmitter<Recipe>();
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeListItemSeleted.emit(recipe);
  }
}

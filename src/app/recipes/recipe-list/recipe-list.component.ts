import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Fish Recipe", "A recipe to cook fish", "http://upload4.95171.cn/albumpicimages/20101127/201011272000523172.JPG")
,    new Recipe("Fish Recipe", "A recipe to cook fish", "http://upload4.95171.cn/albumpicimages/20101127/201011272000523172.JPG")

  ];
  constructor() { 
    
  }

  ngOnInit() {
  }

}

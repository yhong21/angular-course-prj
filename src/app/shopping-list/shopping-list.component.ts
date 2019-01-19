import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Fish", 2),
    new Ingredient("Chili Pepper", 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAdded(ingredient:Ingredient){
    let exist = false;
    this.ingredients.forEach((item,key)=>{
      if(item.name == ingredient.name){
        item.amount = item.amount + ingredient.amount;
        exist = true;
      }
    });
    if(!exist){
      this.ingredients.push(ingredient);
    }
  }
  onDeleted(ingredient: Ingredient) {
    this.ingredients.forEach((item, key) => {
      if (item.name == ingredient.name) {
        if (item.amount > ingredient.amount)
          item.amount = item.amount - ingredient.amount;
        else
          this.ingredients.splice(key, 1);
      }
    });
  }
  onCleared(){
    this.ingredients = [];
  }
}

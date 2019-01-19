import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();
  @Output() ingredientCleared = new EventEmitter<void>();
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  ingredient: Ingredient = {name:"Chicken", amount:1};
  constructor() { }

  ngOnInit() {
  }
  onAddClick() {
    var ingName = this.nameInputRef.nativeElement.value;
    var ingAmount = +this.amountInputRef.nativeElement.value;
    if(ingName && ingAmount)    
      this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
  }
  onDeleteClick() {
    var ingName = this.nameInputRef.nativeElement.value;
    var ingAmount = +this.amountInputRef.nativeElement.value;
    if(ingName && ingAmount)  
      this.ingredientDeleted.emit(new Ingredient(ingName, ingAmount));
  }
  onClearClick() {
    this.ingredientCleared.emit();
  }
}

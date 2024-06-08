import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: true }) inputAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.inputName.nativeElement.value,
        this.inputAmount.nativeElement.value
      )
    );
  }
}

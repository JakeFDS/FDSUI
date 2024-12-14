import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { AllergenIngredientForm } from './allergen-ingredient-forms';
import { NutrientIngredientValueForm } from './nutrient-ingredient-value-forms';

export class NewIngredientForm {
  displayName: FormControl<string | null> = new FormControl;
  internalReference: FormControl<string | null> = new FormControl;
  foodCode: FormControl<string | null> = new FormControl;
  costPerKilo: FormControl<number | null> = new FormControl;
  allergens: FormArray = new FormArray([new FormGroup(new AllergenIngredientForm)]);
  nutrients: FormArray = new FormArray([new FormGroup(new NutrientIngredientValueForm)]);
}

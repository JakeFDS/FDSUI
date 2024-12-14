import { FormControl } from '@angular/forms';

export class NutrientIngredientValueForm {
  nutrientId: FormControl<string | null> = new FormControl;
  nutrientValue: FormControl<number | null> = new FormControl;
}

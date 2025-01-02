import { AllergenIngredient } from './allergen-ingredient';
import { NutrientIngredientValue } from './nutrient-ingredient-value';

export interface NewIngredient {
  displayName?: string;
  internalReference?: string;
  foodCode?: string;
  costPerKilo?: number;
  allergens: AllergenIngredient[];
  nutrients: NutrientIngredientValue[];
}

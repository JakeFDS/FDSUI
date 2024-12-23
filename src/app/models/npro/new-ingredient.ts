import { NutrientIngredientValue } from './nutrient-ingredient-value';
import { AllergenIngredient } from './allergen-ingredient';

export interface NewIngredient {
  displayName: string;
  internalReference: string;
  foodCode: string;
  costPerKilo: number;
  allergens: AllergenIngredient[];
  nutrients: NutrientIngredientValue[];
}

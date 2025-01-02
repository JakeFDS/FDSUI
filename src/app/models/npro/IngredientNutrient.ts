export interface IngredientNutrient {
  ingredientId: string;
  nutrientId: string;
  displayOrder: number;
  label: string;
  nutrientValue: number | string;
  unitOfMeasurement: string;
  abbreviation: string;
}

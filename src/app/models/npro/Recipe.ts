export interface Recipe {
  recipeId: string
  reference: string
  recipeName: string
  revision: string
  dateCreated: string
  cookingLoss: number
  finishedWeight: number
  totalWeight: number
  recommendedPortionWeight: number
  cookingLossAsMoisture: boolean
  portionCount: number
  calculatePortions: boolean
  addedSugar: number
  liquid: boolean
  specificGravity: number
  sugarTaxApplies: boolean
  sugarTaxId: any
  publishedDate: any
  isLocked: boolean
  password: any
  totalCostPerPortion: number
  profitMargiin: number
  salePricePerPortion: number
  recipeTypeId: any
  internalReference: any
  organisationId: string
  heatScaleId: any
  unitOfMeasurementId: any
  suitabilityId: any
  heatScale: any
  recipeGroupLink: any[]
  recipeLine: RecipeLine[]
  recipePrice: any[]
  recipeType: any
  sugarTax: any
  suitability: any
  unitOfMeasurement: any
}

export interface RecipeLine {
  recipeLineId: string
  recipeId: string
  ingredientName: string
  ingredientId: string
  embeddedRecipeId: any
  quantity: number
  quid: boolean
  quidpercentage: number
  addedSugarPer100g: number
  weightOrVolume: number
  specificGravity: number
  liquid: boolean
  costPerKilo: number
  childRecipeId: any
}

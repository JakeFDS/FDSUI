export interface Allergen {
  allergenId: string;
  allergenName: string;
  allergenDescription: string;
  systemAllergen: boolean;
  breakdown: string;
  boldInDeclaration: boolean;
  organisationId: string;
  internalReference: string;
  included: boolean;
}

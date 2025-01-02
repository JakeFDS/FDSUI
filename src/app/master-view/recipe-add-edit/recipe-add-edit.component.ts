import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {
  IGX_DIALOG_DIRECTIVES,
  IGX_GRID_DIRECTIVES,
  IGX_INPUT_GROUP_DIRECTIVES,
  IGX_SIMPLE_COMBO_DIRECTIVES,
  IGX_TABS_DIRECTIVES,
  IgxButtonDirective,
  IgxIconComponent,
  IgxOverlayOutletDirective,
  IgxRippleDirective,
  IgxSwitchComponent,
  IgxToggleActionDirective,
  IgxToggleDirective,
  IRowSelectionEventArgs
} from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { UspHeatScaleSelectResult } from '../../models/npro/usp-heat-scale-select-result';
import { UspRecipeTypeSelectAllOrganisationResult } from '../../models/npro/usp-recipe-type-select-all-organisation-result';
import { Allergen } from '../../models/npro/allergen';
import { UspRecipeGroupSelectResult } from '../../models/npro/usp-recipe-group-select-result';
import { UspSugarTaxResult } from '../../models/npro/usp-sugar-tax-result';
import { UspGetIngredientsResult } from '../../models/npro/usp-get-ingredients-result';
import { UspUnitOfMeasureSelectResult } from '../../models/npro/usp-unit-of-measure-select-result';
import { NProService } from '../../services/npro.service';
import {Recipe, RecipeLine} from "../../models/npro/Recipe";

@Component({
  selector: 'app-recipe-add-edit',
  imports: [FormsModule, FormsModule, RouterLink, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './recipe-add-edit.component.html',
  styleUrls: ['./recipe-add-edit.component.scss']
})
export class RecipeAddEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recommendedPortionWeight?: number;

  private _recipeId1: string = 'Null';
  @Input()
  public get recipeId1(): string {
    return this._recipeId1 ?? 'Null';
  }
  public set recipeId1(value: string) {
    this._recipeId1 = value;
    this.nProAllergen$.next();
  }
  public reference?: string;
  public finishedWeight?: number;
  public selectedIngredientId?: string;
  public recipeTypeId?: string;
  public portionCount?: number;
  public sugarTaxApplies: boolean = false;
  public selectedIngredient?: UspGetIngredientsResult;
  private _searchTerm2?: string;
  public get searchTerm2(): string | undefined {
    return this._searchTerm2;
  }
  public set searchTerm2(value: string | undefined) {
    this._searchTerm2 = value;
    this.nProUspGetIngredientsResult1$.next();
  }
  public totalWeight?: number;
  public recipeName?: string;
  public revision?: string;
  public sugarTaxBand?: string;
  public cookingLossAsMoisture: boolean = false;
  public addedSugar?: number;
  public cookingLoss?: number;
  public recipeGroupId?: string;
  public unitOfMeasureMeasurementId?: string;
  public heatScaleId?: string;
  public editMode: boolean = false;
  public columnVisible: boolean = false;
  public columnVisible1: boolean = false;
  public columnVisible2: boolean = false;
  public columnVisible3: boolean = false;
  public columnVisible4: boolean = false;
  public columnVisible5: boolean = false;
  public columnVisible6: boolean = false;
  public columnVisible7: boolean = false;
  public columnVisible8: boolean = false;
  public columnVisible9: boolean = false;
  public columnVisible10: boolean = false;
  public columnVisible11: boolean = false;
  public columnVisible12: boolean = false;
  public columnVisible13: boolean = false;
  public columnVisible14: boolean = false;
  public nProGetRecipeResult: Recipe  = {
    addedSugar: 0,
    calculatePortions: false,
    cookingLoss: 0,
    cookingLossAsMoisture: false,
    dateCreated: "",
    finishedWeight: 0,
    heatScale: undefined,
    heatScaleId: undefined,
    internalReference: undefined,
    isLocked: false,
    liquid: false,
    organisationId: "",
    password: undefined,
    portionCount: 0,
    profitMargiin: 0,
    publishedDate: undefined,
    recipeGroupLink: [],
    recipeId: "",
    recipeLine: [],
    recipeName: "",
    recipePrice: [],
    recipeType: undefined,
    recipeTypeId: undefined,
    recommendedPortionWeight: 0,
    reference: "",
    revision: "",
    salePricePerPortion: 0,
    specificGravity: 0,
    sugarTax: undefined,
    sugarTaxApplies: false,
    sugarTaxId: undefined,
    suitability: undefined,
    suitabilityId: undefined,
    totalCostPerPortion: 0,
    totalWeight: 0,
    unitOfMeasurement: undefined,
    unitOfMeasurementId: undefined
  }
  public nProUspSugarTaxResult: UspSugarTaxResult[] = [];
  public nProUspRecipeGroupSelectResult: UspRecipeGroupSelectResult[] = [];
  public nProUspRecipeTypeSelectAllOrganisationResult: UspRecipeTypeSelectAllOrganisationResult[] = [];
  public nProUspHeatScaleSelectResult: UspHeatScaleSelectResult[] = [];
  public nProUspUnitOfMeasureSelectResult: UspUnitOfMeasureSelectResult[] = [];
  public nProAllergen: Allergen[] = [];
  public nProAllergen$: Subject<void> = new Subject<void>();

  public nProUspGetIngredientsResult1: UspGetIngredientsResult[] = [];
  public nProUspGetIngredientsResult1$: Subject<void> = new Subject<void>();

  constructor(private nProService: NProService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.recipeId1 = id;
      this.editMode = true;

    this.nProService.getRecipeById(this.recipeId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProGetRecipeResult = data);}
    this.nProService.getUspSugarTaxResultList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspSugarTaxResult = data);
    this.nProService.getUspRecipeGroupSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeGroupSelectResult = data);
    this.nProService.getUspRecipeTypeSelectAllOrganisationResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeTypeSelectAllOrganisationResult = data);
    this.nProService.getUspHeatScaleSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspHeatScaleSelectResult = data);
    this.nProService.getUspUnitOfMeasureSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspUnitOfMeasureSelectResult = data);
    this.nProService.getAllergenList2(this.recipeId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProAllergen = data);
    this.nProAllergen$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getAllergenList2(this.recipeId1).pipe(take(1)).subscribe(data => this.nProAllergen = data);
    });
    this.nProService.getUspGetIngredientsResultList(this.searchTerm2 as any).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspGetIngredientsResult1 = data);
    this.nProUspGetIngredientsResult1$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspGetIngredientsResultList(this.searchTerm2 as any).pipe(take(1)).subscribe(data => this.nProUspGetIngredientsResult1 = data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.nProAllergen$.complete();
    this.nProUspGetIngredientsResult1$.complete();
    this.destroy$.complete();
  }

  public editDone(evt:any) {


      this.nProGetRecipeResult.totalWeight = 0;
      this.nProGetRecipeResult.recipeLine.forEach(i => this.updateTotalWeight(i.quantity));
      this.updateFinishedWeight()
      console.log(`=> 'cellEditDone'` + evt.cellID.rowID + ' '+ evt.cellID.columnID + ' ' + evt.cellID.rowIndex);

    // @ts-ignore

  }

  updateTotalWeight(weightToAdd: number | undefined){
    if(weightToAdd == undefined){
      weightToAdd = 0;
    }
    this.nProGetRecipeResult.totalWeight += weightToAdd;
  }
  updateFinishedWeight(){

    let factor =  this.nProGetRecipeResult.cookingLoss / 100
    this.nProGetRecipeResult.finishedWeight =  this.nProGetRecipeResult.totalWeight - this.nProGetRecipeResult.totalWeight * factor;
  }
  updateWeightLoss(){
    this.nProGetRecipeResult.cookingLoss = (100 - (( this.nProGetRecipeResult.finishedWeight /  this.nProGetRecipeResult.totalWeight) * 100))
    this.nProGetRecipeResult.cookingLoss = Math.round(this.nProGetRecipeResult.cookingLoss * 100) / 100
  }
  updateTotalPortions(){
    if(this.nProGetRecipeResult.recommendedPortionWeight > 0) {
      this.nProGetRecipeResult.portionCount =  this.nProGetRecipeResult.finishedWeight / this.nProGetRecipeResult.recommendedPortionWeight;
      this.nProGetRecipeResult.portionCount = Math.round(this.nProGetRecipeResult.portionCount * 100) / 100
    }

  }
  updatePortionSize(){
    if(this.nProGetRecipeResult.portionCount > 0){
      this.nProGetRecipeResult.recommendedPortionWeight = (this.nProGetRecipeResult.finishedWeight / this.nProGetRecipeResult.portionCount)
      this.nProGetRecipeResult.recommendedPortionWeight = Math.round(this.nProGetRecipeResult.recommendedPortionWeight * 100) / 100
    }
  }

  saveRecipe(){
    console.log(this.nProGetRecipeResult);
  }


  public addIngredient(): void {
    if(this.selectedIngredient) {
      let newIngredient: RecipeLine = {
        addedSugarPer100g: 0,
        childRecipeId: undefined,
        embeddedRecipeId: undefined,
        quid: false,
        quidpercentage: 0,
        recipeId: "",
        recipeLineId: "",
        specificGravity: 0,
        weightOrVolume: 0,
        ingredientId: this.selectedIngredient.ingredientId,
        ingredientName: this.selectedIngredient.foodName,
        quantity: 0,
        costPerKilo: 0,
        liquid: false

      }
      this.nProGetRecipeResult.recipeLine.push(newIngredient);

      this.searchTerm2 = '';

    }
  }
  public gridIngredientsRowSelectionChanging(event: IRowSelectionEventArgs) {
    this.selectedIngredient = event.newSelection[0];

    console.log( this.selectedIngredient);
  }


}

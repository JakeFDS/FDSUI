import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { Allergen } from '../../models/npro/allergen';
import { UspRecipeTypeSelectAllOrganisationResult } from '../../models/npro/usp-recipe-type-select-all-organisation-result';
import { UspUnitOfMeasureSelectResult } from '../../models/npro/usp-unit-of-measure-select-result';
import { UspSugarTaxResult } from '../../models/npro/usp-sugar-tax-result';
import { UspHeatScaleSelectResult } from '../../models/npro/usp-heat-scale-select-result';
import { UspRecipeGroupSelectResult } from '../../models/npro/usp-recipe-group-select-result';
import { UspGetIngredientsResult } from '../../models/npro/usp-get-ingredients-result';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-recipe-add-edit',
  imports: [FormsModule, FormsModule, RouterLink, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './recipe-add-edit.component.html',
  styleUrls: ['./recipe-add-edit.component.scss']
})
export class RecipeAddEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recommendedPortionWeight?: number;

  private _recipeId1?: string;
  @Input()
  public get recipeId1(): string | undefined {
    return this._recipeId1;
  }
  public set recipeId1(value: string | undefined) {
    this._recipeId1 = value;
    this.nProAllergen$.next();
  }
  public reference?: string;
  public finishedWeight?: number;
  public selectedIngredientId?: string;
  public recipeTypeId?: string;
  public portionCount?: number;
  public sugarTaxApplies: boolean = false;

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
  public nProUspGetIngredientsResult: UspGetIngredientsResult[] = [];
  public nProUspSugarTaxResult: UspSugarTaxResult[] = [];
  public nProUspRecipeGroupSelectResult: UspRecipeGroupSelectResult[] = [];
  public nProUspRecipeTypeSelectAllOrganisationResult: UspRecipeTypeSelectAllOrganisationResult[] = [];
  public nProUspHeatScaleSelectResult: UspHeatScaleSelectResult[] = [];
  public nProUspUnitOfMeasureSelectResult: UspUnitOfMeasureSelectResult[] = [];
  public nProAllergen: Allergen[] = [];
  public nProAllergen$: Subject<void> = new Subject<void>();

  public nProUspGetIngredientsResult1: UspGetIngredientsResult[] = [];
  public nProUspGetIngredientsResult1$: Subject<void> = new Subject<void>();

  constructor(private nProService: NProService) { }

  ngOnInit() {
    this.nProService.getUspGetIngredientsResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspGetIngredientsResult = data);
    this.nProService.getUspSugarTaxResultList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspSugarTaxResult = data);
    this.nProService.getUspRecipeGroupSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeGroupSelectResult = data);
    this.nProService.getUspRecipeTypeSelectAllOrganisationResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeTypeSelectAllOrganisationResult = data);
    this.nProService.getUspHeatScaleSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspHeatScaleSelectResult = data);
    this.nProService.getUspUnitOfMeasureSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspUnitOfMeasureSelectResult = data);
    this.nProService.getAllergenList2(this.recipeId1 as any).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProAllergen = data);
    this.nProAllergen$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getAllergenList2(this.recipeId1 as any).pipe(take(1)).subscribe(data => this.nProAllergen = data);
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
}

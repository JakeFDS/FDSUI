import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { UspNutrientIngredientValuesSelectVitaminsResult } from '../../models/npro/usp-nutrient-ingredient-values-select-vitamins-result';
import { CustomerType } from '../../models/customer/customer-type';
import { Allergen } from '../../models/npro/allergen';
import { UspNutrientIngredientValuesVisibleSelectResult } from '../../models/npro/usp-nutrient-ingredient-values-visible-select-result';
import { UspNutrientIngredientValuesSelectMainEightResult } from '../../models/npro/usp-nutrient-ingredient-values-select-main-eight-result';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-ingredient-add-edit',
  imports: [FormsModule, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './ingredient-add-edit.component.html',
  styleUrls: ['./ingredient-add-edit.component.scss']
})
export class IngredientAddEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public nitrogenConversionFactor: number = 0;
  public internalReference?: string;
  public displayName?: string;

  private _ingredientId1: string = 'Null';
  @Input()
  public get ingredientId1(): string {
    return this._ingredientId1 ?? 'Null';
  }
  public set ingredientId1(value: string) {
    this._ingredientId1 = value;
    this.nProUspNutrientIngredientValuesSelectMainEightResult$.next();
    this.nProUspNutrientIngredientValuesSelectVitaminsResult$.next();
    this.nProUspNutrientIngredientValuesVisibleSelectResult$.next();
    this.nProAllergen$.next();
  }
  public edibleProportion: number = 0;
  public foodName?: string;
  public foodCode?: string;
  public totalSolids: number = 0;
  public isLiquid?: boolean;
  public costPerKilo?: number;
  public glycerolConversionFactor: number = 0;
  public test?: CustomerType;
  public specificGravity: number = 1;
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
  public columnVisible15: boolean = false;
  public columnVisible16: boolean = false;
  public value: number = 11;
  public nProUspNutrientIngredientValuesSelectMainEightResult: UspNutrientIngredientValuesSelectMainEightResult[] = [];
  public nProUspNutrientIngredientValuesSelectMainEightResult$: Subject<void> = new Subject<void>();

  public nProUspNutrientIngredientValuesSelectVitaminsResult: UspNutrientIngredientValuesSelectVitaminsResult[] = [];
  public nProUspNutrientIngredientValuesSelectVitaminsResult$: Subject<void> = new Subject<void>();

  public nProUspNutrientIngredientValuesVisibleSelectResult: UspNutrientIngredientValuesVisibleSelectResult[] = [];
  public nProUspNutrientIngredientValuesVisibleSelectResult$: Subject<void> = new Subject<void>();

  public nProAllergen: Allergen[] = [];
  public nProAllergen$: Subject<void> = new Subject<void>();

  public checked: boolean = true;

  constructor(private nProService: NProService) { }

  ngOnInit() {
    this.nProService.getUspNutrientIngredientValuesSelectMainEightResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesSelectMainEightResult = data);
    this.nProUspNutrientIngredientValuesSelectMainEightResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesSelectMainEightResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesSelectMainEightResult = data);
    });
    this.nProService.getUspNutrientIngredientValuesSelectVitaminsResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesSelectVitaminsResult = data);
    this.nProUspNutrientIngredientValuesSelectVitaminsResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesSelectVitaminsResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesSelectVitaminsResult = data);
    });
    this.nProService.getUspNutrientIngredientValuesVisibleSelectResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesVisibleSelectResult = data);
    this.nProUspNutrientIngredientValuesVisibleSelectResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesVisibleSelectResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesVisibleSelectResult = data);
    });
    this.nProService.getAllergenList1(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProAllergen = data);
    this.nProAllergen$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getAllergenList1(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProAllergen = data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.nProUspNutrientIngredientValuesSelectMainEightResult$.complete();
    this.nProUspNutrientIngredientValuesSelectVitaminsResult$.complete();
    this.nProUspNutrientIngredientValuesVisibleSelectResult$.complete();
    this.nProAllergen$.complete();
    this.destroy$.complete();
  }
}

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
import {ActivatedRoute} from "@angular/router";
import {IngredientDetail} from "../../models/npro/IngredientDetails";
import {IngredientNutrient} from "../../models/npro/IngredientNutrient";
import {NewIngredient} from "../../models/npro/new-ingredient";
import {AllergenIngredient} from "../../models/npro/allergen-ingredient";
import {NutrientIngredientValue} from "../../models/npro/nutrient-ingredient-value";

@Component({
  selector: 'app-ingredient-add-edit',
  imports: [FormsModule, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './ingredient-add-edit.component.html',
  styleUrls: ['./ingredient-add-edit.component.scss']
})
export class IngredientAddEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public nitrogenConversionFactor: number = 0;
  public internalReference?: string = "";
  public displayName?: string = "";
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
  public ingredientDetails?: IngredientDetail;
  public edibleProportion: number = 0;
  public foodName?: string = "";
  public foodCode?: string = "";
  public totalSolids: number = 0;
  public isLiquid?: boolean;
  public editMode: boolean = false;
  public costPerKilo?: number = 0;
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
  public nProUspNutrientIngredientValuesSelectMainEightResult: IngredientNutrient[] = [];
  public nProUspNutrientIngredientValuesSelectMainEightResult$: Subject<void> = new Subject<void>();

  public nProUspNutrientIngredientValuesSelectVitaminsResult: IngredientNutrient[] = [];
  public nProUspNutrientIngredientValuesSelectVitaminsResult$: Subject<void> = new Subject<void>();

  public nProUspNutrientIngredientValuesVisibleSelectResult: IngredientNutrient[] = [];
  public nProUspNutrientIngredientValuesVisibleSelectResult$: Subject<void> = new Subject<void>();

  public nProAllergen: Allergen[] = [];
  public nProAllergen$: Subject<void> = new Subject<void>();

  public checked: boolean = true;

  constructor(private nProService: NProService,
                   private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.ingredientId1 = id;
      this.editMode = true;

    this.nProService.getIngredientById(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.processIngredientData(data[0]));
    }
    this.nProUspNutrientIngredientValuesSelectMainEightResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesSelectMainEightResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesSelectMainEightResult = this.processNutrientMap(data));
    });
    this.nProService.getUspNutrientIngredientValuesSelectMainEightResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesSelectMainEightResult = this.processNutrientMap(data));
    this.nProUspNutrientIngredientValuesSelectMainEightResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesSelectMainEightResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesSelectMainEightResult = this.processNutrientMap(data));
    });
    this.nProService.getUspNutrientIngredientValuesSelectVitaminsResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesSelectVitaminsResult = this.processNutrientMap(data));
    this.nProUspNutrientIngredientValuesSelectVitaminsResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesSelectVitaminsResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesSelectVitaminsResult = this.processNutrientMap(data));
    });
    this.nProService.getUspNutrientIngredientValuesVisibleSelectResultList(this.ingredientId1).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspNutrientIngredientValuesVisibleSelectResult = this.processNutrientMap(data));
    this.nProUspNutrientIngredientValuesVisibleSelectResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspNutrientIngredientValuesVisibleSelectResultList(this.ingredientId1).pipe(take(1)).subscribe(data => this.nProUspNutrientIngredientValuesVisibleSelectResult = this.processNutrientMap(data));
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

  processIngredientData(ingredientData: IngredientDetail){
this.foodCode = ingredientData.foodCode;
    this.internalReference = ingredientData.internalReference;
    this.foodName = ingredientData.foodName;
    this.displayName = ingredientData.displayName;
    this.costPerKilo = ingredientData.costPerKilo;
    this.edibleProportion = ingredientData.edibleProportion;
    this.totalSolids = ingredientData.totalSolids;
    this.nitrogenConversionFactor = ingredientData.nitrogenConversionFactor;
    this.glycerolConversionFactor = ingredientData.glycerolConversionFactor;
    this.isLiquid = ingredientData.liquid;
    this.specificGravity = ingredientData.specificGravity;



  }

  processNutrientMap(nutrientMap: IngredientNutrient[]): IngredientNutrient[]{

    nutrientMap.forEach((value,index) => this.processNutrientValueToLetter(value,index));
    return nutrientMap;

  }
  reverseProcessNutrientMap(nutrientMap: IngredientNutrient[]): IngredientNutrient[]{

    nutrientMap.forEach((value,index) => this.processNutrientValueToNumber(value,index));
    return nutrientMap;

  }

  processNutrientValueToLetter(nutrient: IngredientNutrient, index: number) {
    let value = nutrient.nutrientValue
    if (typeof value === 'number') {
      if (value >= 0) {
        nutrient.nutrientValue = value.toFixed(2)

        return;

      } else if (value < 0 && value > -2) {
        nutrient.nutrientValue = 'Tr'
        return;

      } else if (value <= -2 && value > -3) {

        nutrient.nutrientValue = 'N'
        return;


      } else {
        nutrient.nutrientValue = 'N/A'
        return;

      }
    }
  }
    processNutrientValueToNumber(nutrient: IngredientNutrient, index: number){
      let value = nutrient.nutrientValue
      if(typeof value == 'string') {
        if (value == 'Tr') {
          nutrient.nutrientValue = -1
          return;

        } else if (value == 'N') {

          nutrient.nutrientValue = -2
          return;


        } else if (value == 'N/A') {
          nutrient.nutrientValue = -3
          return;

        }
      }
    return;
  }

  saveIngredient(){
    if(this.editMode){

    } else {
     let newIngredient: NewIngredient = {
       displayName: this.foodName,
       internalReference: this.internalReference,
       foodCode: this.foodCode,
       costPerKilo: this.costPerKilo,
       allergens: this.nProAllergen,
       nutrients: this.reverseProcessNutrientMap(this.nProUspNutrientIngredientValuesVisibleSelectResult)
      }
      this.nProService.postNewIngredient(newIngredient).subscribe(result => console.log(result));
      console.log(newIngredient);

    }
  }
}

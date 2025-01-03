import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { UspHeatScaleSelectResult } from '../models/npro/usp-heat-scale-select-result';
import { UspIngredientGroupSelectResult } from '../models/npro/usp-ingredient-group-select-result';
import { UspNutrientIngredientValuesSelectVitaminsResult } from '../models/npro/usp-nutrient-ingredient-values-select-vitamins-result';
import { UspSuitabilityResult } from '../models/npro/usp-suitability-result';
import { UspRecipeTypeSelectAllOrganisationResult } from '../models/npro/usp-recipe-type-select-all-organisation-result';
import { UspGetRecipesResult } from '../models/npro/usp-get-recipes-result';
import { Allergen } from '../models/npro/allergen';
import { UspLibrarySelectAllOrganisationResult } from '../models/npro/usp-library-select-all-organisation-result';
import { UspRecipeGroupSelectResult } from '../models/npro/usp-recipe-group-select-result';
import { UspSugarTaxResult } from '../models/npro/usp-sugar-tax-result';
import { UspGetIngredientsResult } from '../models/npro/usp-get-ingredients-result';
import { UspNutrientIngredientValuesVisibleSelectResult } from '../models/npro/usp-nutrient-ingredient-values-visible-select-result';
import { NewIngredient } from '../models/npro/new-ingredient';
import { UspUnitOfMeasureSelectResult } from '../models/npro/usp-unit-of-measure-select-result';
import { UspNutrientIngredientValuesSelectMainEightResult } from '../models/npro/usp-nutrient-ingredient-values-select-main-eight-result';
import { ErrorHandlerService } from './error-handler.service';
import {IngredientDetail} from "../models/npro/IngredientDetails";
import {IngredientNutrient} from "../models/npro/IngredientNutrient";
import {Recipe} from "../models/npro/Recipe";

const API_ENDPOINT = 'https://localhost:7088';

@Injectable({
  providedIn: 'root'
})
export class NProService {
  constructor(
    private http: HttpClient
  ) { }

  public getUspLibrarySelectAllOrganisationResultList(orgId: string): Observable<UspLibrarySelectAllOrganisationResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspLibrarySelectAllOrganisationResult[]>(`${API_ENDPOINT}/api/List/libraries`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspLibrarySelectAllOrganisationResult[]>('getUspLibrarySelectAllOrganisationResultList', [])));
  }

  public getAllergenList(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(`${API_ENDPOINT}/api/Allergen`)
      .pipe(catchError(ErrorHandlerService.handleError<Allergen[]>('getAllergenList', [])));
  }

  public getUspGetIngredientsResultList(foodName: string): Observable<UspGetIngredientsResult[]> {
    const params = new HttpParams()
      .append('foodName', foodName);
    const options = {
      params,
    };
    return this.http.get<UspGetIngredientsResult[]>(`${API_ENDPOINT}/api/Ingredient/search`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspGetIngredientsResult[]>('getUspGetIngredientsResultList', [])));
  }

  public getRecipeById(id: string): Observable<Recipe> {
    const options =
      { params: new HttpParams().set('id', id) };
    return this.http.get<Recipe>(`${API_ENDPOINT}/api/Recipe`, options)
      .pipe(catchError(ErrorHandlerService.handleError<Recipe>('getRecipeById', undefined)));
  }
  public getIngredientById(id: string): Observable<IngredientDetail[]> {
    const options =
      { params: new HttpParams().set('id', id) };
    return this.http.get<IngredientDetail[]>(`${API_ENDPOINT}/api/Ingredient`, options)
      .pipe(catchError(ErrorHandlerService.handleError<IngredientDetail[]>('getIngredientById', undefined)));
  }
  public getUspNutrientIngredientValuesSelectMainEightResultList(id: string): Observable<IngredientNutrient[]> {
    const params = new HttpParams()
      .append('id', id);
    const options = {
      params,
    };
    return this.http.get<IngredientNutrient[]>(`${API_ENDPOINT}/api/NutrientIngredient/maineight`, options)
      .pipe(catchError(ErrorHandlerService.handleError<IngredientNutrient[]>('getUspNutrientIngredientValuesSelectMainEightResultList', [])));
  }

  public getUspNutrientIngredientValuesSelectVitaminsResultList(id: string): Observable<IngredientNutrient[]> {
    const params = new HttpParams()
      .append('id', id);
    const options = {
      params,
    };
    return this.http.get<IngredientNutrient[]>(`${API_ENDPOINT}/api/NutrientIngredient/vitamins`, options)
      .pipe(catchError(ErrorHandlerService.handleError<IngredientNutrient[]>('getUspNutrientIngredientValuesSelectVitaminsResultList', [])));
  }

  public getUspNutrientIngredientValuesVisibleSelectResultList(id: string): Observable<IngredientNutrient[]> {
    const params = new HttpParams()
      .append('id', id);
    const options = {
      params,
    };
    return this.http.get<IngredientNutrient[]>(`${API_ENDPOINT}/api/NutrientIngredient`, options)
      .pipe(catchError(ErrorHandlerService.handleError<IngredientNutrient[]>('getUspNutrientIngredientValuesVisibleSelectResultList', [])));
  }

  public getAllergenList1(id: string): Observable<Allergen[]> {
    const params = new HttpParams()
      .append('id', id);
    const options = {
      params,
    };
    return this.http.get<Allergen[]>(`${API_ENDPOINT}/api/Allergen/ingredient`, options)
      .pipe(catchError(ErrorHandlerService.handleError<Allergen[]>('getAllergenList1', [])));
  }

  public getUspRecipeGroupSelectResultList(orgId: string): Observable<UspRecipeGroupSelectResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspRecipeGroupSelectResult[]>(`${API_ENDPOINT}/api/List/recipeGroups`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspRecipeGroupSelectResult[]>('getUspRecipeGroupSelectResultList', [])));
  }

  public getUspRecipeTypeSelectAllOrganisationResultList(orgId: string): Observable<UspRecipeTypeSelectAllOrganisationResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspRecipeTypeSelectAllOrganisationResult[]>(`${API_ENDPOINT}/api/List/recipeType`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspRecipeTypeSelectAllOrganisationResult[]>('getUspRecipeTypeSelectAllOrganisationResultList', [])));
  }

  public getUspGetRecipesResultList(recipeName: string): Observable<UspGetRecipesResult[]> {
    const params = new HttpParams()
      .append('recipeName', recipeName);
    const options = {
      params,
    };
    return this.http.get<UspGetRecipesResult[]>(`${API_ENDPOINT}/api/Recipe/search`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspGetRecipesResult[]>('getUspGetRecipesResultList', [])));
  }

  public getUspSugarTaxResultList(): Observable<UspSugarTaxResult[]> {
    return this.http.get<UspSugarTaxResult[]>(`${API_ENDPOINT}/api/List/sugarTax`)
      .pipe(catchError(ErrorHandlerService.handleError<UspSugarTaxResult[]>('getUspSugarTaxResultList', [])));
  }

  public getUspHeatScaleSelectResultList(orgId: string): Observable<UspHeatScaleSelectResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspHeatScaleSelectResult[]>(`${API_ENDPOINT}/api/List/heatScale`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspHeatScaleSelectResult[]>('getUspHeatScaleSelectResultList', [])));
  }

  public getUspUnitOfMeasureSelectResultList(orgId: string): Observable<UspUnitOfMeasureSelectResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspUnitOfMeasureSelectResult[]>(`${API_ENDPOINT}/api/List/unitOfMeasurement`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspUnitOfMeasureSelectResult[]>('getUspUnitOfMeasureSelectResultList', [])));
  }

  public getAllergenList2(id: string): Observable<Allergen[]> {
    const params = new HttpParams()
      .append('id', id);
    const options = {
      params,
    };
    return this.http.get<Allergen[]>(`${API_ENDPOINT}/api/Allergen/recipe`, options)
      .pipe(catchError(ErrorHandlerService.handleError<Allergen[]>('getAllergenList2', [])));
  }

  public getUspSuitabilityResultList(): Observable<UspSuitabilityResult[]> {
    return this.http.get<UspSuitabilityResult[]>(`${API_ENDPOINT}/api/List/suitability`)
      .pipe(catchError(ErrorHandlerService.handleError<UspSuitabilityResult[]>('getUspSuitabilityResultList', [])));
  }

  public getUspIngredientGroupSelectResultList(orgId: string): Observable<UspIngredientGroupSelectResult[]> {
    const params = new HttpParams()
      .append('orgId', orgId);
    const options = {
      params,
    };
    return this.http.get<UspIngredientGroupSelectResult[]>(`${API_ENDPOINT}/api/Ingredient/groups`, options)
      .pipe(catchError(ErrorHandlerService.handleError<UspIngredientGroupSelectResult[]>('getUspIngredientGroupSelectResultList', [])));
  }

  public postNewIngredient(data: any): Observable<NewIngredient | undefined> {
    if (!data) {
      return of(undefined);
    }
    const body = data;
    return this.http.post<NewIngredient | undefined>(`${API_ENDPOINT}/api/Ingredient/addIngredient`, body)
      .pipe(catchError(ErrorHandlerService.handleError<NewIngredient | undefined>('postNewIngredient', undefined)));
  }


}

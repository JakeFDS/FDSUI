import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { UspIngredientGroupSelectResult } from '../../models/npro/usp-ingredient-group-select-result';
import { Allergen } from '../../models/npro/allergen';
import { UspRecipeTypeSelectAllOrganisationResult } from '../../models/npro/usp-recipe-type-select-all-organisation-result';
import { UspSugarTaxResult } from '../../models/npro/usp-sugar-tax-result';
import { UspLibrarySelectAllOrganisationResult } from '../../models/npro/usp-library-select-all-organisation-result';
import { UspHeatScaleSelectResult } from '../../models/npro/usp-heat-scale-select-result';
import { UspRecipeGroupSelectResult } from '../../models/npro/usp-recipe-group-select-result';
import { UspSuitabilityResult } from '../../models/npro/usp-suitability-result';
import { StateService } from '../../services/state.service';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-administration',
  imports: [RouterLink, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
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
  public nProUspSugarTaxResult: UspSugarTaxResult[] = [];
  public nProUspSuitabilityResult: UspSuitabilityResult[] = [];
  public nProUspHeatScaleSelectResult: UspHeatScaleSelectResult[] = [];
  public nProUspRecipeTypeSelectAllOrganisationResult: UspRecipeTypeSelectAllOrganisationResult[] = [];
  public nProUspRecipeGroupSelectResult: UspRecipeGroupSelectResult[] = [];
  public nProUspIngredientGroupSelectResult: UspIngredientGroupSelectResult[] = [];
  public nProUspLibrarySelectAllOrganisationResult: UspLibrarySelectAllOrganisationResult[] = [];
  public nProAllergen: Allergen[] = [];

  constructor(private nProService: NProService, private stateService: StateService) { }

  ngOnInit() {
    this.nProService.getUspSugarTaxResultList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspSugarTaxResult = data);
    this.nProService.getUspSuitabilityResultList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspSuitabilityResult = data);
    this.nProService.getUspHeatScaleSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspHeatScaleSelectResult = data);
    this.nProService.getUspRecipeTypeSelectAllOrganisationResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeTypeSelectAllOrganisationResult = data);
    this.nProService.getUspRecipeGroupSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeGroupSelectResult = data);
    this.nProService.getUspIngredientGroupSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspIngredientGroupSelectResult = data);
    this.nProService.getUspLibrarySelectAllOrganisationResultList(this.stateService.organisationId).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspLibrarySelectAllOrganisationResult = data);
    this.nProService.getAllergenList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProAllergen = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { UspGetRecipesResult } from '../../models/npro/usp-get-recipes-result';
import { UspRecipeGroupSelectResult } from '../../models/npro/usp-recipe-group-select-result';
import { UspRecipeTypeSelectAllOrganisationResult } from '../../models/npro/usp-recipe-type-select-all-organisation-result';
import { StateService } from '../../services/state.service';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-recipe-search',
  imports: [FormsModule, RouterLink, IGX_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recipeId?: string;
  public groupIds: UspRecipeGroupSelectResult[] = [];
  public typeIds: UspRecipeTypeSelectAllOrganisationResult[] = [];

  private _searchTerm1?: string;
  public get searchTerm1(): string | undefined {
    return this._searchTerm1;
  }
  public set searchTerm1(value: string | undefined) {
    this._searchTerm1 = value;
    this.nProUspGetRecipesResult$.next();
  }
  public columnVisible: boolean = false;
  public nProUspRecipeGroupSelectResult: UspRecipeGroupSelectResult[] = [];
  public nProUspRecipeTypeSelectAllOrganisationResult: UspRecipeTypeSelectAllOrganisationResult[] = [];
  public nProUspGetRecipesResult: UspGetRecipesResult[] = [];
  public nProUspGetRecipesResult$: Subject<void> = new Subject<void>();

  constructor(private nProService: NProService, private stateService: StateService) { }

  ngOnInit() {
    this.nProService.getUspRecipeGroupSelectResultList('').pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeGroupSelectResult = data);
    this.nProService.getUspRecipeTypeSelectAllOrganisationResultList(this.stateService.organisationId).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspRecipeTypeSelectAllOrganisationResult = data);
    this.nProService.getUspGetRecipesResultList(this.searchTerm1 as any).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspGetRecipesResult = data);
    this.nProUspGetRecipesResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspGetRecipesResultList(this.searchTerm1 as any).pipe(take(1)).subscribe(data => this.nProUspGetRecipesResult = data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.nProUspGetRecipesResult$.complete();
    this.destroy$.complete();
  }

  public buttonClick() {
    this.searchTerm1 = this.searchTerm1;
  }
}

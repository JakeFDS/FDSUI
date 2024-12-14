import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective, IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { Allergen } from '../../models/npro/allergen';
import { UspLibrarySelectAllOrganisationResult } from '../../models/npro/usp-library-select-all-organisation-result';
import { UspGetIngredientsResult } from '../../models/npro/usp-get-ingredients-result';
import { StateService } from '../../services/state.service';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-ingredient-search',
  imports: [FormsModule, RouterLink, IGX_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})
export class IngredientSearchComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public ingredientId?: string;
  public libraryIds: UspLibrarySelectAllOrganisationResult[] = [];

  private _searchTerm?: string;
  public get searchTerm(): string | undefined {
    return this._searchTerm;
  }
  public set searchTerm(value: string | undefined) {
    this._searchTerm = value;
    this.nProUspGetIngredientsResult$.next();
  }
  public libraryId?: string;
  public columnVisible: boolean = false;
  public columnVisible1: boolean = false;
  public columnVisible2: boolean = false;
  public nProUspLibrarySelectAllOrganisationResult: UspLibrarySelectAllOrganisationResult[] = [];
  public nProAllergen: Allergen[] = [];
  public nProUspGetIngredientsResult: UspGetIngredientsResult[] = [];
  public nProUspGetIngredientsResult$: Subject<void> = new Subject<void>();

  constructor(private nProService: NProService, private stateService: StateService) { }

  ngOnInit() {
    this.nProService.getUspLibrarySelectAllOrganisationResultList(this.stateService.organisationId).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspLibrarySelectAllOrganisationResult = data);
    this.nProService.getAllergenList().pipe(takeUntil(this.destroy$)).subscribe(data => this.nProAllergen = data);
    this.nProService.getUspGetIngredientsResultList(this.searchTerm as any).pipe(takeUntil(this.destroy$)).subscribe(data => this.nProUspGetIngredientsResult = data);
    this.nProUspGetIngredientsResult$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nProService.getUspGetIngredientsResultList(this.searchTerm as any).pipe(take(1)).subscribe(data => this.nProUspGetIngredientsResult = data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.nProUspGetIngredientsResult$.complete();
    this.destroy$.complete();
  }

  public gridIngredientsRowSelectionChanging(event: IRowSelectionEventArgs) {
    this.ingredientId = event.newSelection[0]?.ingredientId as string;
  }
}

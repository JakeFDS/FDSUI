import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxSnackbarComponent, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { NewIngredientForm } from '../../models/npro/new-ingredient-forms';
import { NewIngredient } from '../../models/npro/new-ingredient';
import { NProService } from '../../services/npro.service';

@Component({
  selector: 'app-temp',
  imports: [ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxSnackbarComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public newIngredientFormModel: FormGroup<NewIngredientForm> = new FormGroup(new NewIngredientForm);
  @ViewChild('snackbarsuccess')
  snackbarsuccess!: IgxSnackbarComponent;
  @ViewChild('snackbarerror')
  snackbarerror!: IgxSnackbarComponent;

  constructor(private nProService: NProService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public ngSubmitNewIngredient() {
    this.nProService.postNewIngredient(this.newIngredientFormModel.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (data) {
        this.newIngredientFormModel.reset();
        this.snackbarsuccess.open();
      }
      else {
        this.snackbarerror.open();
      }
    });
  }

  public onResetForm(e: Event) {
    e.preventDefault();
    this.newIngredientFormModel.reset();
  }
}

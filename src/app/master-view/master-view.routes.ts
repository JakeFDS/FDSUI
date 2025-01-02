import { Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { HomeComponent } from './home/home.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { IngredientAddEditComponent } from './ingredient-add-edit/ingredient-add-edit.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeAddEditComponent } from './recipe-add-edit/recipe-add-edit.component';
import { AdministrationComponent } from './administration/administration.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { UsersComponent } from './users/users.component';
import { ResponsiveTemplateComponent } from './responsive-template/responsive-template.component';
import { TempComponent } from './temp/temp.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [{
  path: '', component: MasterViewComponent, children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      data: {
        text: 'Home'
      }
    },
    {
      path: 'ingredient-search',
      component: IngredientSearchComponent,
      data: {
        text: 'Ingredient Search'
      }
    },
    {
      path: 'ingredient-add-edit',
      component: IngredientAddEditComponent,
      data: {
        text: 'Ingredient Add Edit'
      }
    },
    {
      path: 'ingredient-add-edit/:id',
      component: IngredientAddEditComponent,
      data: {
        text: 'Ingredient Add Edit'
      }
    },
    {
      path: 'recipe-search',
      component: RecipeSearchComponent,
      data: {
        text: 'Recipe Search'
      }
    },
    {
      path: 'recipe-add-edit',
      component: RecipeAddEditComponent,
      data: {
        text: 'Recipe Add Edit'
      }
    },
    {
      path: 'recipe-add-edit/:id',
      component: RecipeAddEditComponent,
      data: {
        text: 'Recipe Add Edit'
      }
    },
    {
      path: 'administration',
      component: AdministrationComponent,
      data: {
        text: 'Administration'
      }
    },
    {
      path: 'organisation',
      component: OrganisationComponent,
      data: {
        text: 'Organisation'
      }
    },
    {
      path: 'users',
      component: UsersComponent,
      data: {
        text: 'Users'
      }
    },
    {
      path: 'responsive-template',
      component: ResponsiveTemplateComponent,
      data: {
        text: 'Responsive Template'
      }
    },
    {
      path: 'temp',
      component: TempComponent,
      data: {
        text: 'Temp'
      }
    },
    {
      path: 'error-page',
      component: ErrorPageComponent,
      data: {
        text: 'Error Page'
      }
    }
  ]
}];

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-organisation',
  imports: [FormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {
  public address1?: string;
  public town?: string;
  public website?: string;
  public licenseCount?: number;
  public fax?: string;
  public vATNo?: string;
  public postcode?: string;
  public organisationName?: string;
  public email?: string;
  public address3?: string;
  public address2?: string;
  public internalReference1?: string;
  public county?: string;
  public telephone?: string;
  public companyRegNo?: string;
}

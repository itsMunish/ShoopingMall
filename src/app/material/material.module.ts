import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';





const Materials=[
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatSelectModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSliderModule
];


@NgModule({
  declarations: [],
  imports: [Materials],
  exports: [Materials]

})
export class MaterialModule { }

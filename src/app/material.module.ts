import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';


const materialArray = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatSortModule,
  MatListModule,
];

@NgModule({
  imports: [...materialArray],
  exports: [...materialArray]
})

export class MaterialModule{}
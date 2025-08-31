import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkCardComponent } from './work-card/work-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { WorkDetailsComponent } from './work-details/work-details.component';


@NgModule({
  declarations: [
    WorkComponent,
    WorkCardComponent,
    WorkDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
  ],
  exports: [WorkComponent]
})
export class WorkModule { }

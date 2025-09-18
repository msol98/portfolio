import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkCardComponent } from './work-card/work-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
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
    MatBottomSheetModule
  ],
  exports: [WorkComponent]
})
export class WorkModule { }

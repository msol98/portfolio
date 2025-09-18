import { Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkModel } from 'src/app/models/models';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent {

  work?: WorkModel;

  @ViewChild("dialogHeader") dialogHeader?: ElementRef<HTMLElement>;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) dialogData: WorkModel,
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) bottomsheetData: WorkModel) {
    if (!!dialogData) this.work = dialogData;
    else if (!!bottomsheetData) this.work = bottomsheetData;
  }

  handleScroll(event: any) {
    this.dialogHeader?.nativeElement.classList.add('blur');
    if (event.target.scrollTop < 10)
      this.dialogHeader?.nativeElement.classList.remove('blur');
  }
}

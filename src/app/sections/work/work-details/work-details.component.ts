import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkModel } from 'src/app/models/models';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent {

  @ViewChild("dialogHeader") dialogHeader?: ElementRef<HTMLElement>;

  handleScroll(event: any) {
    this.dialogHeader?.nativeElement.classList.add('blur');
    if (event.target.scrollTop < 10)
      this.dialogHeader?.nativeElement.classList.remove('blur');
  }

  constructor(@Inject(MAT_DIALOG_DATA) public work: WorkModel) { }
}

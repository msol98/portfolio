import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkModel } from 'src/app/models/work-models';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public work: WorkModel) {
  }

  ngOnInit(): void {
  }

}

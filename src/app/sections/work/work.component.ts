import { Component, OnInit } from '@angular/core';
import { WorkListItemModel, WorkType } from 'src/app/models/models';
import works from './work.json';
import { MatDialog } from '@angular/material/dialog';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  jobList: WorkListItemModel[] = [];
  projectList: WorkListItemModel[] = [];

  constructor(private dialog: MatDialog,
    private bottomsheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    this.projectList = works.filter(work => work.type == WorkType.PROJECT).map(({ id, title, image, companyName }) => ({ id, title, image: image[0], companyName }));
    this.jobList = works.filter(work => work.type == WorkType.JOB).map(({ id, title, image, companyName }) => ({ id, title, image: image[0], companyName }));
  }

  openWorkDetails(workId: string) {
    if (!workId) return;

    const isMobileSize = window.innerWidth < 640;
    const work = works.find(work => work.id == workId);
    if (!work) return;

    if (isMobileSize) {
      this.bottomsheet.open(WorkDetailsComponent, {
        data: work,
      });
    } else {
      this.dialog.open(WorkDetailsComponent, {
        data: work,
        width: '750px',
      });
    }
  }
}
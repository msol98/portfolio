import { Component, OnInit } from '@angular/core';
import * as works from './work.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  _works: WorkModel[] = (works as any).default;
  selectedWork?: WorkModel;
  technologies: Array<string> = [];

  constructor() {
    this.select(this._works[0]);
  }

  ngOnInit(): void {
  }

  select(option: WorkModel) {
    this.selectedWork = option;
    this.technologies =option.technology;
  }
}

export interface WorkModel {
  name: string
  date: string
  imageName: string
  link?: string
  description: string
  technology: Array<string>
} 

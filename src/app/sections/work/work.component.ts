import { Component } from '@angular/core';
import * as works from './work.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  works: WorkModel[] = (works as any).default;

}

export interface WorkModel {
  title: string
  date: string
  imageName: string
  link?: string
  description: string
  tags: Array<string>
} 

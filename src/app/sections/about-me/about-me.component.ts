import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  skills: string[] = ['JavaScript', 'Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Angular Material', 'Bootstrap', 'Git', 'Tailwind CSS', 'Redux', 'Zustand', 'Jest', 'GitHub', 'Figma'];
}

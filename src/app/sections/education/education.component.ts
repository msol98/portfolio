import { Component } from '@angular/core';
import { CertificateModel } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  certificates: Array<CertificateModel> = [
    {
      title: 'Electrical Engineering BSc.',
      source: 'Iran University of Science and Technology',
      date: '2016 - 2021',
      imageUrl: 'assets/images/iust.webp'
    },
    {
      title: 'Interactivity with JavaScript',
      source: 'University of Michigan (Coursera)',
      date: 'July 2020',
      imageUrl: 'assets/images/interactivity-js.jpeg',
      link: 'https://www.coursera.org/account/accomplishments/verify/7KM5VMQTH9D9'
    },
    {
      title: 'Introduction to HTML5',
      source: 'University of Michigan (Coursera)',
      date: 'July 2020',
      imageUrl: 'assets/images/introduction-html.jpeg',
      link: 'https://www.coursera.org/account/accomplishments/verify/67L839VPYNKT'
    }
  ]

}

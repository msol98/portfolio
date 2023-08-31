import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll$?: Subscription;
  startPosition: number = 0;

  @ViewChild('header') header?: ElementRef<HTMLElement>;

  ngOnInit() {
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;
      if (this.startPosition <= currentPosition)
        this.hideHeader();
      else
        this.showHeader();
      this.startPosition = currentPosition
    });
    this.showHeader();
  }

  hideHeader() {
    this.header?.nativeElement.classList.remove('h-show');
    this.header?.nativeElement.classList.add('h-hide');
  }

  showHeader() {
    this.header?.nativeElement.classList.remove('h-hide');
    this.header?.nativeElement.classList.add('h-show');
  }
}

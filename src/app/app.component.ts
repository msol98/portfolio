import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'potfolio';
  userHasVisited: boolean = false;

  observers: Array<IntersectionObserver> = [];
  @ViewChildren('component') components?: QueryList<ElementRef<HTMLElement>>;

  constructor() {
    history.replaceState({}, document.title, ".");
  }

  setPresent() {
    document.body.classList.add('present');
  }

  ngOnInit() {
    if (document.hasFocus()) {
      this.setPresent();
    } else {
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && !this.userHasVisited) {
          this.setPresent();
          this.userHasVisited = true;
        }
      }, false);
    }
  }

  ngAfterViewInit() {
    this.components?.toArray().forEach((fakeComponent: ElementRef<HTMLElement>, index) => {
      let component;
      const targetId = fakeComponent.nativeElement.nextElementSibling?.id;
      if (targetId) component = document.getElementById(targetId);
      if (component) {
        const observer = this.creatObserver(component);
        observer.observe(component);
      }
    });
  }

  creatObserver(component: HTMLElement) {
    return new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          component.classList.add('goingUpEl');
        }
      });
    }, { threshold: 0.7, }
    );
  }
}

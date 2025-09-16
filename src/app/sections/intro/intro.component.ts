import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent  implements OnInit, OnDestroy {

  private subscription?: Subscription;
  startDate = new Date(2021, 6, 1); // July 1, 2021 (month is 0-indexed)
  time = { years: 0, months: 0, days: 0, hours: 0 };

  ngOnInit() {
     this.calculateTime(); // initial calc
    this.subscription = interval(1000 * 60 * 60).subscribe(() => { // update every hour
      this.calculateTime();
    });
  }

  navigateContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  calculateTime() {
    const now = new Date();
    let years = now.getFullYear() - this.startDate.getFullYear();
    let months = now.getMonth() - this.startDate.getMonth();
    let days = now.getDate() - this.startDate.getDate();
    let hours = now.getHours() - this.startDate.getHours();

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    this.time = { years, months, days, hours };
  }

  pad(num: number): string {
  return num < 10 ? '0' + num : num.toString();
}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

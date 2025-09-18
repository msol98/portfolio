import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;
  startDate = new Date(2021, 6, 1);
  time = { years: 0, months: 0, days: 0, hours: 0 };

  ngOnInit() {
    this.calculateTime();
    this.subscription = interval(1000 * 60 * 60).subscribe(() => this.calculateTime());
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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

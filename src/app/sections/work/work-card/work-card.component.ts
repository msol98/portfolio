import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkListItemModel } from 'src/app/models/models';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {

  @Input('work') work?: WorkListItemModel;
  @Output('workClicked') workClicked: EventEmitter<string> = new EventEmitter();

  handleWorkOpen() {
    this.workClicked.emit(this.work?.id);
  }

}

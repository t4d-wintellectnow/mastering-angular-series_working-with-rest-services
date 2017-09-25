import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../models/widget';

@Component({
  selector: 'tr[widget-edit-row]',
  templateUrl: './widget-edit-row.component.html',
  styleUrls: ['./widget-edit-row.component.css']
})
export class WidgetEditRowComponent implements OnInit {

  @Input()
  widget: Widget;

  public editWidget: Widget;

  @Output()
  onSave = new EventEmitter<Widget>();

  @Output()
  onCancel = new EventEmitter<undefined>();

  constructor() {
  }

  ngOnInit() {
    this.editWidget = Object.assign({}, this.widget);
  }

  public cancel() {
    if (this.onCancel) {
      this.onCancel.emit();
    } else {
      this.editWidget = {} as Widget;
    }
  }

}

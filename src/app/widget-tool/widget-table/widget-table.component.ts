import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../models/widget';

@Component({
  selector: 'widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.css']
})
export class WidgetTableComponent implements OnInit {

  @Input()
  widgets: Widget[];

  @Input()
  editWidgetId: number;

  @Output()
  onEdit = new EventEmitter<number>();

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onCancel = new EventEmitter<undefined>();

  @Output()
  onSave = new EventEmitter<Widget>();

  constructor() { }

  ngOnInit() {
  }

}

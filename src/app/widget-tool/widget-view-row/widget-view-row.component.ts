import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../models/widget';

@Component({
  selector: 'tr[widget-view-row]',
  templateUrl: './widget-view-row.component.html',
  styleUrls: ['./widget-view-row.component.css']
})
export class WidgetViewRowComponent implements OnInit {

  @Input()
  widget: Widget;

  @Output()
  onEdit = new EventEmitter<number>();

  @Output()
  onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}

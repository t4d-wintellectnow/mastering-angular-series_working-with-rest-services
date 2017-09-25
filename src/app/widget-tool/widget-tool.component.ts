import { Component, OnInit } from '@angular/core';

import { Widget } from './models/widget';
import { Widgets } from './services/widgets';

@Component({
  selector: 'widget-tool',
  templateUrl: './widget-tool.component.html',
  styleUrls: ['./widget-tool.component.css']
})
export class WidgetToolComponent implements OnInit {

  public editWidgetId = 0;

  constructor(private widgets: Widgets) { }

  ngOnInit() {
  }

  public edit(widgetId: number) {
    this.editWidgetId = widgetId;
  }

  public delete(widgetId: number) {
    this.widgets.delete(widgetId);
    this.editWidgetId = 0;
  }

  public save(widget: Widget) {
    if (widget.id) {
      this.widgets.replace(widget);
    } else {
      this.widgets.insert(widget);
    }
    this.editWidgetId = 0;
  }

  public cancel() {
    this.editWidgetId = 0;
  }
}

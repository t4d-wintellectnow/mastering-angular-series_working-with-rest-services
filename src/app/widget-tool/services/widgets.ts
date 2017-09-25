import { Widget } from '../models/widget';

export class Widgets {

  private _widgets: Widget[];

  constructor() {
    this._widgets = [
      {
        id: 1,
        name: 'Small Red Widget',
        description: 'A small red widget.',
        color: 'red',
        size: 'small',
        quantity: 23
      },
      {
        id: 2,
        name: 'Medium Blue Widget',
        description: 'A medium blue widget.',
        color: 'blue',
        size: 'medium',
        quantity: 12
      },
      {
        id: 3,
        name: 'Large Green Widget',
        description: 'A large green widget.',
        color: 'green',
        size: 'large',
        quantity: 45
      },
      {
        id: 4,
        name: 'Medium Yellow Widget',
        description: 'A medium yellow widget.',
        color: 'yellow',
        size: 'medium',
        quantity: 43
      },
    ];
  }

  getAll() {
    return this._widgets;
  }

  get(widgetId: number) {
    return this._widgets.find(w => w.id === widgetId);
  }

  insert(widget: Widget) {
    widget.id = this._widgets.length === 0 ? 1 : Math.max(...this._widgets.map(w => w.id)) + 1;
    this._widgets = this._widgets.concat(widget);
    return this;
  }

  replace(widget: Widget) {
    const widgetIndex = this._widgets.findIndex(w => w.id === widget.id);
    this._widgets = [ ...this._widgets.slice(0, widgetIndex), widget, ...this._widgets.slice(widgetIndex + 1) ];
    return this;
  }

  delete(widgetId: number) {
    const widgetIndex = this._widgets.findIndex(w => w.id === widgetId);
    this._widgets = [ ...this._widgets.slice(0, widgetIndex), ...this._widgets.slice(widgetIndex + 1) ];
    return this;
  }
}

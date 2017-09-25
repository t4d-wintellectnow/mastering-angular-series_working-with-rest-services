import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Widgets } from './services/widgets';

import { WidgetToolComponent } from './widget-tool.component';
import { ToolHeaderComponent } from './tool-header/tool-header.component';
import { ToolFooterComponent } from './tool-footer/tool-footer.component';
import { WidgetEditRowComponent } from './widget-edit-row/widget-edit-row.component';
import { WidgetViewRowComponent } from './widget-view-row/widget-view-row.component';
import { WidgetTableComponent } from './widget-table/widget-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    WidgetToolComponent,
    ToolHeaderComponent,
    ToolFooterComponent,
    WidgetEditRowComponent,
    WidgetViewRowComponent,
    WidgetTableComponent
  ],
  exports: [WidgetToolComponent],
  providers: [Widgets],
})
export class WidgetToolModule { }

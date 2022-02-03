import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { SplitterModule } from 'primeng/splitter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    imports: [CommonModule, CardModule, CalendarModule, SplitterModule, FontAwesomeModule, ButtonModule, FieldsetModule, TimelineModule, AccordionModule, OverlayPanelModule],
    declarations: [],
    exports: [CommonModule, FormsModule, CardModule, CalendarModule, SplitterModule, FontAwesomeModule, ButtonModule, FieldsetModule, TimelineModule, AccordionModule, OverlayPanelModule]
})
export class SharedModule { }
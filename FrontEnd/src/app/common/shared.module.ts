import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {SplitterModule} from 'primeng/splitter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
 imports:      [ CommonModule, CardModule, CalendarModule, SplitterModule, FontAwesomeModule, ButtonModule, CarouselModule],
 declarations: [],
 exports:      [ CommonModule, FormsModule, CardModule, CalendarModule, SplitterModule, FontAwesomeModule, ButtonModule, CarouselModule]
})
export class SharedModule {}
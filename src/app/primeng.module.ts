import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AccordionModule} from 'primeng/accordion';
import {TooltipModule} from 'primeng/tooltip';
import {ListboxModule} from 'primeng/listbox';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ScrollPanelModule,
    CheckboxModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    AccordionModule,
    TooltipModule,
    ListboxModule,
    TieredMenuModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    MessagesModule,
    MessageModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: []
})
export class PrimengModule { }
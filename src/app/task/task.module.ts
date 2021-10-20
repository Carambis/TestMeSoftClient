import { NgModule } from "@angular/core";
import { from } from "rxjs";
import { AlignmentComponent } from "./component/alignment/alignment.component";
import { ButtonDoubleClickComponent } from "./component/button-double-click/button-double-click.component";
import { ButtonFunctionComponent } from "./component/button-function/button-function.component";
import { CalendarComponent } from "./component/calendar/calendar.component";
import { CheckboxCheckComponent } from "./component/checkbox-check/checkbox-check.component";
import { CheckboxComponent } from "./component/checkbox/checkbox.component";
import { CursorComponent } from "./component/cursor/cursor.component";
import { FileTypeCheckComponent } from "./component/file-type-check/file-type-check.component";
import { FilterComponent } from "./component/filter/filter.component";
import { FontComponent } from "./component/font/font.component";
import { FormProblemComponent } from "./component/form-problem/form-problem.component";
import { GrammarComponent } from "./component/grammar/grammar.component";
import { HintComponent } from "./component/hint/hint.component";
import { IlluminationComponent } from "./component/illumination/illumination.component";
import { LinkWorkComponent } from "./component/link-work/link-work.component";
import { LinkComponent } from "./component/link/link.component";
import { LocationComponent } from "./component/location/location.component";
import { RadiobuttonCheckComponent } from "./component/radiobutton-check/radiobutton-check.component";
import { SortProblemComponent } from "./component/sort-problem/sort-problem.component";
import { UnckeckParamComponent } from "./component/unckeck-param/unckeck-param.component";
import { TaskComponent } from "./task.component";


@NgModule({
    declarations: [
        TaskComponent
    ],
    imports: [
        AlignmentComponent,
        ButtonDoubleClickComponent,
        ButtonFunctionComponent,
        CalendarComponent,
        CheckboxCheckComponent,
        CheckboxComponent,
        CursorComponent,
        FileTypeCheckComponent,
        FilterComponent,
        FontComponent,
        FormProblemComponent,
        GrammarComponent,
        HintComponent,
        IlluminationComponent,
        LinkWorkComponent,
        LinkComponent,
        LocationComponent,
        RadiobuttonCheckComponent,
        SortProblemComponent,
        UnckeckParamComponent

    ],
    providers: [],
    bootstrap: [TaskModule]
})
export class TaskModule { }
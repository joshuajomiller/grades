import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    StudentTableComponent,
    StudentGridComponent,
    StudentDetailsComponent,
    CommentEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

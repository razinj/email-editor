import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmailEditorModule } from 'angular-email-editor';
import { ClipboardModule } from 'ngx-clipboard';
import { EmailBuilderComponent } from './components/email-builder/email-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailEditorModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-email-builder',
  templateUrl: './email-builder.component.html',
  styleUrls: ['./email-builder.component.scss']
})
export class EmailBuilderComponent implements OnInit {

  constructor(
    private clipboardService: ClipboardService
  ) { }

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  ngOnInit(): void {
  }

  editorLoaded(event: any) {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => {
      console.log('exportHtml', data);
      // alert(data.html);
      this.clipboardService.copyFromContent(data.html);
    });
  }

}

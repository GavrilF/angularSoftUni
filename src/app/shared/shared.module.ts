import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordMatchDirective } from './directives/password-match.directive';
import { TestComponent } from './test/test.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
@NgModule({
    declarations: [
        PasswordMatchDirective,
        TestComponent,
        FileUploadComponent

    ],
    imports: [
        CommonModule
    ],
    exports: [
        PasswordMatchDirective,
        TestComponent,
        FileUploadComponent
    ]
  })
  export class SharedModule {}
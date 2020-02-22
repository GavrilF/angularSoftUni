import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordMatchDirective } from './directives/password-match.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
@NgModule({
    declarations: [
        PasswordMatchDirective,
        FileUploadComponent

    ],
    imports: [
        CommonModule
    ],
    exports: [
        PasswordMatchDirective,
        FileUploadComponent
    ]
  })
  export class SharedModule {}
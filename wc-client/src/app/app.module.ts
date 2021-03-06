import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileDisplayComponent } from './others/file-display/file-display.component';
import { FileDetailComponent } from './others/file-detail/file-detail.component';

import { FilesService } from './services/files.service';
import { AuthService } from './services/auth.service';
import { UserAccessService } from './services/user-access.service';
import { CollaborationService } from './services/collaboration.service';
import { KeywordsService } from './services/keywords.service';
import { BuildRunService } from './services/build-run.service';

import { routing } from './app.routes';
import { FileCreateComponent } from './others/file-create/file-create.component';
import { NavBarComponent } from './others/nav-bar/nav-bar.component';
import { FooterComponent } from './others/footer/footer.component';
import { ProfileInComponent } from './others/nav-bar/profile-in/profile-in.component';
import { ProfileComponent } from './others/profile/profile.component';
import { EditorComponent } from './others/editor/editor.component';
import { SearchBoxPipe } from './pipes/search-box.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileDisplayComponent,
    FileDetailComponent,
    FileCreateComponent,
    NavBarComponent,
    FooterComponent,
    ProfileInComponent,
    ProfileComponent,
    EditorComponent,
    SearchBoxPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HttpClientModule
  ],
  providers: [
    {
      provide: "filesInfo",
      useClass: FilesService
    },
    {
      provide: "auth",
      useClass: AuthService
    },
    {
      provide: "userAccess",
      useClass: UserAccessService
    },
    {
      provide: "collaboration",
      useClass: CollaborationService
    },
    {
      provide: "keywords",
      useClass: KeywordsService
    },
    {
      provide: "buildAndRun",
      useClass: BuildRunService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

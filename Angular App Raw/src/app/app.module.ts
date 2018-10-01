// Core
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
// import { FirebaseApp } from '@firebase/app-types';
// import { FirebaseAuth } from '@firebase/auth-types';
// import { FirebaseDatabase } from '@firebase/database-types';
// import { FirebaseMessaging } from '@firebase/messaging-types';
// import { FirebaseStorage } from '@firebase/storage-types';
// import { FirebaseFirestore } from '@firebase/firestore-types';
// Mat design Imports
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

// Bootstrap
import 'bootstrap';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PillLibraryComponent } from './components/pill-library/pill-library.component';
import { ForoforComponent } from './components/forofor/forofor.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrugsingleComponent } from './components/drugsingle/drugsingle.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { StaticOnAllComponent } from './components/static-on-all/static-on-all.component';

// Services
import { DataService } from './services/data.service';





const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drug/:slug', component: DrugsingleComponent },
  // { path: '**', component: ForoforComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PillLibraryComponent,
    ForoforComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    DrugsingleComponent,
    FriendsListComponent,
    StaticOnAllComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [DataService, Title],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }

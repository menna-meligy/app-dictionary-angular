import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFormComponent } from './word-form/word-form.component';
import { TranslationResultComponent } from './translation-result/translation-result.component';
import { SynonymsComponentComponent } from './synonyms-component/synonyms-component.component';
import { AntonymsComponentComponent } from './antonyms-component/antonyms-component.component';
import { SamplePhrasesComponentComponent } from './sample-phrases-component/sample-phrases-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { BackendResultComponent } from './backend-result/backend-result.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: 'word-dictionary', component: WordFormComponent },
  { path: 'translation', component: NavbarComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    TranslationResultComponent,
    SynonymsComponentComponent,
    AntonymsComponentComponent,
    SamplePhrasesComponentComponent,
    NavbarComponent,
    NavComponent,
    BackendResultComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}

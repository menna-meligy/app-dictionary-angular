// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-synonyms-component',
//   templateUrl: './synonyms-component.component.html',
//   styleUrls: ['./synonyms-component.component.css'],
// })
// export class SynonymsComponentComponent {
//   @Input() synonyms!: string[];
// }
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';

@Component({
  selector: 'app-synonyms-component',
  templateUrl: './synonyms-component.component.html',
  styleUrls: ['./synonyms-component.component.css'],
})
export class SynonymsComponentComponent implements OnInit {
  word!: string;
  // synonyms!: any[];
  @Input() synonyms!: any[];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
    // this.getSynonyms();
  }

  // getSynonyms(): void {
  //   if (this.word) {
  //     this.apiService.getSynonyms(this.word).subscribe(
  //       (response) => {
  //         this.synonyms = response.response;
  //       },
  //       (error) => {
  //         console.error('Error fetching synonyms:', error);
  //       }
  //     );
  //   }
  // }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   private dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

//   constructor(private http: HttpClient) {}

//   fetchDefinitions(word: string): Observable<any> {
//     const url = `${this.dictionaryApiUrl}/${word}`;

//     return this.http.get(url);
//   }

//   fetchAntonyms(word: string): Observable<any> {
//     const url = `${this.dictionaryApiUrl}/${word}/antonyms`;

//     return this.http.get(url);
//   }

//   fetchSynonyms(word: string): Observable<any> {
//     const url = `${this.dictionaryApiUrl}/${word}/synonyms`;

//     return this.http.get(url);
//   }

//   fetchSamplePhrases(word: string): Observable<any> {
//     const url = `${this.dictionaryApiUrl}/${word}/sentences`;

//     return this.http.get(url);
//   }

//   fetchTranslations(word: string, targetLang: string): Observable<any> {
//     const url = `${this.dictionaryApiUrl}/${word}/translations/${targetLang}`;

//     return this.http.get(url);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedDataService } from './shared-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(
    private http: HttpClient,
    private sharedDataService: SharedDataService
  ) {}

  // Retrieves translations for a word from the API
  getTranslations(): Observable<any> {
    const word = this.sharedDataService.getWord();
    // Getting the word from the sharedDataService
    // and setting the URL by adding the word from there
    const url = `${this.dictionaryApiUrl}${word}`;
    return this.http.get(url);
    // Returning the API call as an Observable
    // so we can subscribe to it and retrieve the data to display.
  }
}

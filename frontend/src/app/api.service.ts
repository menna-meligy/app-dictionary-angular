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

  getTranslations(): Observable<any> {
    const word = this.sharedDataService.getWord();

    const url = `${this.dictionaryApiUrl}${word}`; // Remove the extra slash here
    return this.http.get(url);
  }
}

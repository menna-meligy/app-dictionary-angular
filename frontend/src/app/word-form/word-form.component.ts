import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent {
  sourceLang: string = '';
  targetLang: string = '';
  word: string = '';
  definitions: any[] = [];
  submitted: boolean = false;

  constructor(
    private sharedDataService: SharedDataService,
    private apiService: ApiService
  ) {}

  // Method called when the form is submitted
  // Handles the API call to retrieve translations based on the submitted word
  onSubmit() {
    this.submitted = true;

    // Set the source language, target language, and word in the shared data service
    this.sharedDataService.setSourceLanguage(this.sourceLang);
    this.sharedDataService.setTargetLanguage(this.targetLang);
    this.sharedDataService.setWord(this.word);

    console.log(this.word);

    // Retrieve the word from the shared data service
    const word = this.sharedDataService.getWord();

    // Subscribe to the getTranslations() method of the API service
    // and handle the response and error
    this.apiService.getTranslations().subscribe(
      (response) => {
        console.log('Translation API response:', response);
        this.definitions = response[0].meanings;
      },
      (error) => {
        console.error('Translation API error:', error);
      }
    );
  }
}

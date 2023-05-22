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
  definitions: any[] = []; // Variable to store the definitions
  submitted: boolean = false;

  constructor(
    private sharedDataService: SharedDataService,
    private apiService: ApiService
  ) {}

  onSubmit() {
    this.submitted = true;
    // Set the source language, target language, and word in the shared data service
    this.sharedDataService.setSourceLanguage(this.sourceLang);
    this.sharedDataService.setTargetLanguage(this.targetLang);
    this.sharedDataService.setWord(this.word);
    console.log(this.word);
    // Call the translation API or perform any other necessary actions
    // You can access the shared data service methods here
    const word = this.sharedDataService.getWord();
    this.apiService.getTranslations().subscribe(
      (response) => {
        console.log('Translation API response:', response);
        this.definitions = response[0].meanings; // Extract the meanings from the response
      },
      (error) => {
        console.error('Translation API error:', error);
      }
    );
  }
}
